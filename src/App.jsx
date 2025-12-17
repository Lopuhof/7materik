import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router';

import CreateArticle from './components/createArticle/CreateArticle';
import LeftPanel from './components/leftPanel/LeftPanel';
import LogInModalWindow from './components/logIn/LogInModalWindow';
import Navigation from './components/navigation/Navigation';
import Registration from './components/registration/Registration';

import './app.sass';

let body = document.getElementsByTagName('body');

const App = () => {
    const [modal, setModal] = useState(false);

    const openModalWindow = () => {
        setModal(true);
        body[0].style.overflowY='hidden';
        body[0].style.paddingRight='15px';
    };

    const closeModalWindow = () => {
        setModal(false);
        body[0].style.overflowY='scroll';
        body[0].style.paddingRight='0';
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
            <Routes>
                <Route path='/registration' element={ <Registration /> }></Route>
            </Routes>
        </div>
    );
};

export default App;