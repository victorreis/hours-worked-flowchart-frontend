import React, {useRef} from 'react';
import {Icon, Row, Col, TimePicker} from 'react-materialize';

import moment from 'moment';

import {HOME_START_INPUT, HOME_FINISH_INPUT} from '../../Constants/Texts';
import classes from './HoursWorkedFlowchart.module.css';

const timePickerOptions = {
    autoClose: false,
    container: null,
    defaultTime: 'now',
    duration: 0,
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
};

const HoursWorkedFlowchart = (props) => {
    const startTimePikerRef = useRef('');
    const finishTimePikerRef = useRef('');

    const handleChangeStartTimePicker = (hour, minute) => {
        startTimePikerRef.current = moment(`${hour}:${minute}`);
    };

    const handleChangeFinishTimePicker = (hour, minute) => {
        finishTimePikerRef.current = moment(`${hour}:${minute}`);
    };

    return (
        <>
            <Row>
                <Col s={4}>
                    {HOME_START_INPUT}
                    <Row>
                        <TimePicker
                            ref={startTimePikerRef}
                            icon={<Icon>schedule</Icon>}
                            value={startTimePikerRef.current}
                            onChange={handleChangeStartTimePicker}
                            options={timePickerOptions}
                        />
                    </Row>
                    {HOME_FINISH_INPUT}
                    <Row>
                        <TimePicker
                            ref={finishTimePikerRef}
                            icon={<Icon>schedule</Icon>}
                            value={finishTimePikerRef.current}
                            onChange={handleChangeFinishTimePicker}
                            options={timePickerOptions}
                        />
                    </Row>
                </Col>
                <Col s={8}>Chart</Col>
            </Row>
        </>
    );
};

export default HoursWorkedFlowchart;
