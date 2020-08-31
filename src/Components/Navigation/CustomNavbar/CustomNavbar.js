import React from 'react';
import {Navbar, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';

import CustomNavItem from './Components/CustomNavItem';
import classes from './CustomNavbar.module.css';

const CustomNavbar = (props) => {
    const {items} = props;

    const navItems = items.map(
        (item) =>
            item.showInMenu && <CustomNavItem item={item} key={item.key} />
    );

    return (
        <Navbar
            alignLinks="right"
            brand={<Link to="/">HWFlowchart</Link>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            className={classes.CustomNavbar}
            centerChildren
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true,
            }}>
            {navItems}
        </Navbar>
    );
};

export default CustomNavbar;
