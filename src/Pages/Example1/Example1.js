import React from 'react';

import Counter from './Components/Counter';
import Random from './Components/Random';
import classes from './Example1.module.css';

const Example1 = () => (
    <div className={classes.container}>
        <Counter />
        <Random />
    </div>
);

export default Example1;
