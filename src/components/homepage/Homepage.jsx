import React from 'react';

import Fone from '../fone/Fone';
import LogoName from '../logoName/LogoName';
import Category from '../category/Category';

import './homepage.sass';

const Homepage = () => {
    return (
        <div>
            <Fone />
            <div className="homepageContainer">
                <LogoName />
                <Category />
            </div>
        </div>
    );
};

export default Homepage;