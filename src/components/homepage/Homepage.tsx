import React from 'react';

import Fone from '../fone/Fone.jsx';
import LogoName from '../logoName/LogoName.jsx';

import './homepage.sass';

const Homepage = () => {
    return (
        <div>
            <Fone />
            <div className="homepageContainer">
                <LogoName />
            </div>
        </div>
    );
};

export default Homepage;