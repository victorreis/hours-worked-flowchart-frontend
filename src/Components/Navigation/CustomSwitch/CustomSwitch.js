import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HoursWorkedFlowchart from '../../../Pages/HoursWorkedFlowchart/HoursWorkedFlowchart';
import createCustomRoute from './Components/CustomRoute';
import classes from './CustomSwitch.module.css';

const CustomSwitch = (props) => {
    const {items} = props;

    const routes = items.map((item) => createCustomRoute(item)());

    return (
        <div className={classes.CustomSwitchContainer}>
            <Switch>
                <Route path="/" exact component={HoursWorkedFlowchart} />
                {routes}
            </Switch>
        </div>
    );
};

export default CustomSwitch;
