import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HoursWorkedFlowchart from '../../../Pages/HoursWorkedFlowchart/HoursWorkedFlowchart';
import createCustomRoute from './Components/CustomRoute';

const CustomSwitch = (props) => {
    const {items} = props;

    const routes = items.map((item) => createCustomRoute(item)());

    return (
        <Switch>
            <Route path="/" exact component={HoursWorkedFlowchart} />
            {routes}
        </Switch>
    );
};

export default CustomSwitch;
