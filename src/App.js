import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import withReduxFeatures from 'withReduxFeatures';

import About from './Pages/About';
import Example1 from './Pages/Example1';
import HoursWorkedFlowchart from './Pages/HoursWorkedFlowchart';

const NonWrappedApp = () => (
    <>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/example">example</Link>
                    </li>
                </ul>
            </nav>
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
