import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router';

import Homepage from './components/homepage/Homepage';
import LeftPanel from './components/leftPanel/LeftPanel';
import LogInModalWindow from './components/logIn/LogInModalWindow';
import Navigation from './components/navigation/Navigation';

import './app.sass';

const App = () => {
    const [modal, setModal] = useState(false);

    const openModalWindow = () => {
        setModal(true);
    };

    const closeModalWindow = () => {
        setModal(false);
    };

    return (
        <div>
            <LeftPanel 
                openModalWindow={ openModalWindow }
                modal={ modal } 
                setModal={ setModal }/>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>  
            <div className='appContainer'>
                <Homepage />
            </div>
            { modal && <LogInModalWindow closeModalWindow={ closeModalWindow }/> }  
        </div>
    );
};

export default App;