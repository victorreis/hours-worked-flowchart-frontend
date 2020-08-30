import React from 'react';

import withReduxFeatures from 'withReduxFeatures';

import Example1 from './Pages/Example1/Example1';

const NonWrappedApp = () => (
    <>
        <Example1 />
    </>
);

/** Wrap App component with store providers */
const App = withReduxFeatures(NonWrappedApp);

export default App;
