import React from 'react';
import {Route} from 'react-router-dom';

import classes from './CustomRoute.module.css';

const CustomRoute = (props) => {
    const {component, path, exact, key} = props.item;

    return (
        <Route
            exact={exact}
            path={path}
            className={classes.CustomRoute}
            component={component}
            key={key}
        />
    );
};

const createCustomRoute = (item) => () => CustomRoute({item});
export default createCustomRoute;
