import React from 'react';

import Homepage from './components/homepage/Homepage';
import LeftPanel from './components/leftPanel/LeftPanel';

import './app.sass';

const App = () => {

    return (
        <div>
            <LeftPanel />
            <div className='appContainer'>
                <Homepage />
            </div>    
        </div>
    );
};

export default App;