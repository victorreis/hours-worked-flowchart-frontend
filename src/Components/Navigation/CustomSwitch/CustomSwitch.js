import React from 'react';
import {Row, Col} from 'react-materialize';
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
                <Row>
                    <Col l={1} />
                    <Col l={10} m={12} s={12}>
                        <br />
                        <br />
                        <Route
                            path="/"
                            exact
                            component={HoursWorkedFlowchart}
                        />
                        {routes}
                    </Col>
                    <Col l={1} />
                </Row>
            </Switch>
        </div>
    );
};

export default CustomSwitch;
