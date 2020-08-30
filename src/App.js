import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import withReduxFeatures from 'withReduxFeatures';

import CustomNavbar from './Components/Navigation/CustomNavbar';
import About from './Pages/About';
import Example1 from './Pages/Example1';
import HoursWorkedFlowchart from './Pages/HoursWorkedFlowchart';
import routes from './Routes/Routes';

const NonWrappedApp = () => (
    <>
        <Router>
            <CustomNavbar items={routes} />
            <Switch>
                <Route path="/example">
                    <Example1 />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <HoursWorkedFlowchart />
                </Route>
            </Switch>
        </Router>
    </>
);

/** Wrap App component with store providers */
const App = withReduxFeatures(NonWrappedApp);

export default App;
