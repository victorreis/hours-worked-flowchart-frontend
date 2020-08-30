import Example1 from 'Pages/Example1';

import About from '../Pages/About';
import PageNotFound from '../Pages/PageNotFound';

const routes = [
    {
        key: 'Example',
        name: 'Example',
        path: '/example',
        showInMenu: true,
        exact: true,
        component: Example1,
    },
    {
        key: 'About',
        name: 'About',
        path: '/about',
        showInMenu: true,
        exact: true,
        component: About,
    },
    {
        key: 'Error404',
        name: 'Error 404 - Page not found',
        showInMenu: false,
        exact: false,
        component: PageNotFound,
    },
];

export default routes;
