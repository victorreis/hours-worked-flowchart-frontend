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

import axios from 'axios';
import CustomTimePicker from 'Components/CustomTimePicker';
import moment from 'moment';
import {PieChart, Pie, Sector, Cell} from 'recharts';

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
    const [daytimeHours, setDaytimeHours] = useState(null);
    const [nightHours, setNightHours] = useState(null);

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

    const handleClickGenerateChart = () => {
        if (
            startHourInput &&
            startMinuteInput &&
            finishHourInput &&
            finishMinuteInput
        ) {
            axios
                .post('http://localhost:3001/worked-hours', {
                    startTime: `${startHourInput}:${startMinuteInput}`,
                    finishTime: `${finishHourInput}:${finishMinuteInput}`,
                })
                .then((response) => {
                    setDaytimeHours(response.data.daytimeHours);
                    setNightHours(response.data.nightHours);
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.error(error);
                });
        }
    };

    return (
        <>
            <Row s={12}>
                <Col l={5} m={6} s={12}>
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
                        <Button onClick={handleClickGenerateChart}>
                            Generate Chart
                        </Button>
                    </Row>
                </Col>
                <Col l={7} m={6} s={12} align="center">
                    <Card title="DAYTIME HOURS WORKED">
                        <Row align="center">
                            <br />
                            <br />
                            {daytimeHours || 'Not executed yet.'}
                        </Row>
                    </Card>
                    <Card
                        title="NIGHT HOURS WORKED"
                        className="blue-grey darken-1"
                        textClassName="white-text">
                        <Row align="center">
                            <br />
                            <br />
                            {nightHours || 'Not executed yet.'}
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
export default HoursWorkedFlowchart;
