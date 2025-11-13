import React from 'react';
import Fone from './fone/Fone';
import LeftPanel from './leftPanel/LeftPanel';
import LogoName from './logoName/LogoName';

import './app.sass';


const App = () => {
    return (
        <div>
            <Fone />
            <LeftPanel />
            <LogoName />
        </div>
    );
};

export default App;