import React from 'react';
import {Icon, Row, Col, Range, TextInput, Card} from 'react-materialize';

import classes from './CustomTimePicker.module.css';

const CustomTimePicker = (props) => {
    const {
        title,
        iconName,
        hourInput,
        handleChangeHourInput,
        minuteInput,
        handleChangeMinuteInput,
    } = props;
    return (
        <Card title={title}>
            <Row align="right">
                <Col s={3} className={classes.iconPadding}>
                    <Icon>{iconName}</Icon>
                </Col>
                <Col s={9} align="center">
                    <Col l={5} m={4} s={4} xs={6}>
                        <TextInput
                            type="number"
                            min="0"
                            max="23"
                            value={hourInput}
                            onChange={handleChangeHourInput}
                        />
                    </Col>
                    <Col>:</Col>
                    <Col l={5} m={4} s={4} xs={6}>
                        <TextInput
                            type="number"
                            min="0"
                            max="59"
                            value={minuteInput}
                            onChange={handleChangeMinuteInput}
                        />
                    </Col>
                </Col>
            </Row>
            {/* <Row>
                <Col s={3} align="right">
                    Hours
                </Col>
                <Col s={8}>
                    <Range
                        max="23"
                        min="0"
                        name="points1"
                        step="1"
                        value={startHourRange}
                        onChange={handleChangeStartHourRange}
                    />
                </Col>
            </Row>
            <Row>
                <Col s={3} align="right">
                    Minutes
                </Col>
                <Col s={8}>
                    <Range
                        max="59"
                        min="0"
                        name="points2"
                        step="1"
                        value={startMinuteRange}
                        onChange={handleChangeStartMinuteRange}
                    />
                </Col>
            </Row> */}
        </Card>
    );
};

export default CustomTimePicker;
