import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import withReduxFeatures from 'withReduxFeatures';

import CustomNavbar from './Components/Navigation/CustomNavbar';
import CustomSwitch from './Components/Navigation/CustomSwitch';
import routes from './Routes/Routes';

const NonWrappedApp = () => (
    <>
        <Router>
            <CustomNavbar items={routes} />
            <CustomSwitch items={routes} />
        </Router>
    </>
);

/** Wrap App component with store providers */
const App = withReduxFeatures(NonWrappedApp);

export default App;
