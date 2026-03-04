import React from 'react';

import Fone from '../fone/Fone.js';
import LogoName from '../logoName/LogoName.js';

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