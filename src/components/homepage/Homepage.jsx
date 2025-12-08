import React from 'react';

import Category from '../category/Category';
import Fone from '../fone/Fone';
import LogoName from '../logoName/LogoName';
import Navigation from '../navigation/Navigation';

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