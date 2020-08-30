import React from 'react';
import {Icon, TextInput, Row, Col, TimePicker} from 'react-materialize';

import {HOME_START_INPUT, HOME_FINISH_INPUT} from '../../Constants/Texts';
import classes from './HoursWorkedFlowchart.module.css';

const HoursWorkedFlowchart = (props) => (
    <>
        <Row>
            <Col s={4}>
                {HOME_START_INPUT}
                <Row>
                    <TimePicker
                        icon={<Icon>schedule</Icon>}
                        options={{
                            autoClose: false,
                            container: null,
                            defaultTime: 'now',
                            duration: 350,
                            fromNow: 0,
                            i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                            },
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            onSelect: null,
                            showClearBtn: false,
                            twelveHour: false,
                            vibrate: true,
                        }}
                    />
                </Row>
                {HOME_FINISH_INPUT}
                <Row>
                    <TimePicker
                        icon={<Icon>watch_later</Icon>}
                        options={{
                            autoClose: false,
                            container: null,
                            defaultTime: 'now',
                            duration: 350,
                            fromNow: 0,
                            i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                            },
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            onSelect: null,
                            showClearBtn: false,
                            twelveHour: false,
                            vibrate: true,
                        }}
                    />
                </Row>
            </Col>
            <Col s={8}>Chart</Col>
        </Row>
    </>
);

export default HoursWorkedFlowchart;
