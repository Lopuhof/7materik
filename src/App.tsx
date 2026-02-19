import React, { type FC } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router';

import LeftPanel from './components/leftPanel/LeftPanel.jsx';
import LogInModalWindow from './components/logIn/LogInModalWindow.js';
import Navigation from './components/navigation/Navigation.js';
import Registration from './components/registration/Registration.js';

import './app.sass';

let body:HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName('body');

const App: FC = () => {
    let [modal, setModal] = useState<boolean>(false);

    const openModalWindow = (): void => {
        setModal(true);
        if (body[0] !== undefined) {
            body[0].style.overflowY='hidden';
            body[0].style.paddingRight='15px';
        };
    };

    const closeModalWindow = (): void => {
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
            { modal && <LogInModalWindow closeModalWindow={ closeModalWindow }/> } 
            {/* <CreateArticle /> */}
        </div>
    );
};

export default App;