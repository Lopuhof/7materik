import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
import { Link } from 'react-router';
import '../../../components/category/category.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
const Category = () => {
    return (_jsxs("div", { className: 'category', children: [_jsxs("div", { className: 'category-title', children: [_jsx("p", { children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" }), _jsx("hr", { className: 'category-title-line' })] }), _jsx("div", { className: 'category-cardsContainer', children: _jsxs("div", { className: 'category-cardsContainer-card', children: [_jsx("div", { className: 'category-cardsContainer-card-title', children: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438 (\u043C\u043E\u0436\u0435\u0442 \u0434\u0430\u0436\u0435 \u0434\u043B\u0438\u043D\u043D\u044B\u0439)" }), _jsxs("div", { className: 'category-cardsContainer-card-authorAndDataContainer', children: [_jsxs(Link, { to: '/user', className: 'category-cardsContainer-card-authorAndDataContainer-author', children: [_jsx(FontAwesomeIcon, { icon: faUser, className: 'category-cardsContainer-card-authorAndDataContainer-author-icon' }), _jsx("div", { className: 'category-cardsContainer-card-authorAndDataContainer-author-name', children: "\u0414\u0435\u043D\u0438\u0441 \u0413\u0443\u043B\u044F\u0435\u0432" })] }), _jsxs(Link, { to: '/user', className: 'category-cardsContainer-card-authorAndDataContainer-data', children: [_jsx(FontAwesomeIcon, { icon: faCalendar, className: 'category-cardsContainer-card-authorAndDataContainer-data-icon' }), _jsx("div", { className: 'category-cardsContainer-card-authorAndDataContainer-data-DDMMYY', children: "23.11.1991" })] })] })] }) })] }));
};
export default Category;
//# sourceMappingURL=Category.js.map