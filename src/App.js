import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router';

import LeftPanel from './dist/components/leftPanel/LeftPanel.js';
import LogInModalWindow from './dist/components/logIn/LogInModalWindow.js';
import Navigation from './dist/components/navigation/Navigation.js';
import Registration from './dist/components/registration/Registration.js';

import './app.sass';

let body = document.getElementsByTagName('body');

const App = () => {
    let [modal, setModal] = useState(false);

    const openModalWindow = () => {
        setModal(true);
        if (body[0] !== undefined) {
            body[0].style.overflowY='hidden';
            body[0].style.paddingRight='15px';
        };
    };

    const closeModalWindow = () => {
        setModal(false);
        if (body[0] !== undefined) {
            body[0].style.overflowY='scroll';
            body[0].style.paddingRight='0';
        };
    };

    return (
        <div className='app' id='appId'>
            <LeftPanel 
                openModalWindow={ openModalWindow }
                modal={ modal } 
                setModal={ setModal }
            />
            <div className='app-appContainer'>
                <Navigation />
            </div>
            { modal && <LogInModalWindow onClick={closeModalWindow} className={''}/> } 
            {/* <CreateArticle /> */}
        </div>
    );
};

export default App;