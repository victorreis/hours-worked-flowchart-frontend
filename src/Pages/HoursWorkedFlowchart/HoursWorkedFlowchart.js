import React, {useState} from 'react';
import {
    Icon,
    Row,
    Col,
    TimePicker,
    Range,
    TextInput,
    Button,
    Card,
} from 'react-materialize';

import CustomTimePicker from 'Components/CustomTimePicker';
import moment from 'moment';

import {HOME_START_INPUT, HOME_FINISH_INPUT} from '../../Constants/Texts';
import classes from './HoursWorkedFlowchart.module.css';

const newHour = (hour) => moment(hour).format('HH');
const newMinute = (minute) => moment(minute).format('mm');
const formattedMoment = (hour, minute) => {
    if (hour && minute) {
        return moment().set({hour, minute}).format('HH:mm');
    }
    return 'ERROR';
};

const HoursWorkedFlowchart = (props) => {
    const [startHourInput, setStartHourInput] = useState('');
    const [startMinuteInput, setStartMinuteInput] = useState('');
    const [finishHourInput, setFinishHourInput] = useState('');
    const [finishMinuteInput, setFinishMinuteInput] = useState('');

    const handleChangeStartHourInput = (e) => {
        setStartHourInput(e.target.value);
    };
    const handleChangeStartMinuteInput = (e) => {
        setStartMinuteInput(e.target.value);
    };
    const handleChangeFinishHourInput = (e) => {
        setFinishHourInput(e.target.value);
    };
    const handleChangeFinishMinuteInput = (e) => {
        setFinishMinuteInput(e.target.value);
    };

    // const [startHourRange, setStartHourRange] = useState(0);
    // const [startMinuteRange, setStartMinuteRange] = useState(0);
    // const handleChangeStartHourRange = (e) => {
    //     console.log(e);
    //     setStartHourRange(e.target.value);
    // };
    // const handleChangeStartMinuteRange = (e) => {
    //     console.log(e);
    //     setStartMinuteRange(e.target.value);
    // };
    // console.log('RANGE', `${startHourRange}:${startMinuteRange}`);

    console.log('START INPUT', `${startHourInput}:${startMinuteInput}`);
    console.log(
        'startFormatted',
        formattedMoment(startHourInput, startMinuteInput)
    );

    console.log('FINISH INPUT', `${finishHourInput}:${finishMinuteInput}`);
    console.log(
        'finishFormatted',
        formattedMoment(finishHourInput, finishMinuteInput)
    );

    return (
        <>
            <Row s={12}>
                <Col l={4} m={6} s={12}>
                    <CustomTimePicker
                        title={HOME_START_INPUT}
                        iconName="schedule"
                        hourInput={startHourInput}
                        handleChangeHourInput={handleChangeStartHourInput}
                        minuteInput={startMinuteInput}
                        handleChangeMinuteInput={handleChangeStartMinuteInput}
                    />
                    <CustomTimePicker
                        title={HOME_FINISH_INPUT}
                        iconName="watch_later"
                        hourInput={finishHourInput}
                        handleChangeHourInput={handleChangeFinishHourInput}
                        minuteInput={finishMinuteInput}
                        handleChangeMinuteInput={handleChangeFinishMinuteInput}
                    />
                    <Row align="right">
                        <Button>Generate Chart</Button>
                    </Row>
                </Col>
                <Col>Chart</Col>
            </Row>
        </>
    );
};
export default HoursWorkedFlowchart;
