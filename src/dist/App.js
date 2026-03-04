import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import LeftPanel from './components/leftPanel/LeftPanel.jsx';
import LogInModalWindow from './components/logIn/LogInModalWindow.js';
import Navigation from './components/navigation/Navigation.js';
import Registration from './components/registration/Registration.js';
import './app.sass';
let body = document.getElementsByTagName('body');
const App = () => {
    let [modal, setModal] = useState(false);
    const openModalWindow = () => {
        setModal(true);
        if (body[0] !== undefined) {
            body[0].style.overflowY = 'hidden';
            body[0].style.paddingRight = '15px';
        }
        ;
    };
    const closeModalWindow = () => {
        setModal(false);
        if (body[0] !== undefined) {
            body[0].style.overflowY = 'scroll';
            body[0].style.paddingRight = '0';
        }
        ;
    };
    return (_jsxs("div", { className: 'app', id: 'appId', children: [_jsx(LeftPanel, { openModalWindow: openModalWindow, modal: modal, setModal: setModal }), _jsx("div", { className: 'app-appContainer', children: _jsx(Navigation, {}) }), modal && _jsx(LogInModalWindow, { onClick: closeModalWindow, className: '' })] }));
};
export default App;
//# sourceMappingURL=App.js.map