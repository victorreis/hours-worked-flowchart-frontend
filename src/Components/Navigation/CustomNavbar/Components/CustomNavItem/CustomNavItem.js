import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './CustomNavItem.module.css';

const CustomNavItem = (props) => {
    const {path, name} = props.item;

    return (
        <NavLink to={path} className={classes.NavLink}>
            {name}
        </NavLink>
    );
};

export default CustomNavItem;
