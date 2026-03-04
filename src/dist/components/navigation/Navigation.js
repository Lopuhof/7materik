import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route, NavLink } from 'react-router';
import '../../../components/navigation/navigation.sass';
import Art from '../category/categoryElements/art/Art.js';
import Category from '../category/Category.js';
import Fashion from '../category/categoryElements/fashion/Fashion.js';
import History from '../category/categoryElements/history/History.js';
import Homepage from '../homepage/Homepage.js';
import Library from '../category/categoryElements/library/Library.js';
import Literature from '../category/categoryElements/literature/Literature.js';
import NotFound from '../notFound/NotFound.js';
import Registration from '../registration/Registration.js';
import Science from '../category/categoryElements/science/Science.js';
import UserPage from '../userPage/UserPage.js';
const Navigation = () => {
    return (_jsxs("div", { className: 'navigation', children: [_jsxs("nav", { className: 'navigation-container', children: [_jsx(NavLink, { to: '/', className: 'navigation-container-item', children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }), "|", _jsx(NavLink, { to: '/literature', className: 'navigation-container-item', children: "\u041B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430" }), "|", _jsx(NavLink, { to: '/art', className: 'navigation-container-item', children: "\u0418\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E" }), "|", _jsx(NavLink, { to: '/history', className: 'navigation-container-item', children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F" }), "|", _jsx(NavLink, { to: '/fashion', className: 'navigation-container-item', children: "\u041C\u043E\u0434\u0430" }), "|", _jsx(NavLink, { to: '/science', className: 'navigation-container-item', children: "\u041D\u0430\u0443\u043A\u0430" }), "|", _jsx(NavLink, { to: '/library', className: 'navigation-container-item', children: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u0447\u043D\u043E\u0435 \u0434\u0435\u043B\u043E" }), "|", _jsx(NavLink, { to: '/category', className: 'navigation-container-item', children: "\u0422\u0435\u0441\u0442\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" }), "|", _jsx(NavLink, { to: '/userPage', className: 'navigation-container-item', children: "UserPage" }), "|", _jsx(NavLink, { to: '/test', className: 'navigation-container-item', children: "Test" })] }), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Homepage, {}) }), _jsx(Route, { path: '/literature', element: _jsx(Literature, {}) }), _jsx(Route, { path: '/art', element: _jsx(Art, {}) }), _jsx(Route, { path: '/history', element: _jsx(History, {}) }), _jsx(Route, { path: '/fashion', element: _jsx(Fashion, {}) }), _jsx(Route, { path: '/science', element: _jsx(Science, {}) }), _jsx(Route, { path: '/library', element: _jsx(Library, {}) }), _jsx(Route, { path: '/category', element: _jsx(Category, {}) }), _jsx(Route, { path: '/userPage', element: _jsx(UserPage, {}) }), _jsx(Route, { path: '/registration', element: _jsx(Registration, {}) }), _jsx(Route, { path: '*', element: _jsx(NotFound, {}) })] })] }));
};
export default Navigation;
//# sourceMappingURL=Navigation.js.map