import React, {useState} from 'react';
import './css/style.css';
import Logo from '../Logo';

const Header = () => {
    return (
        <div>
            <div className="background-fone">
                <Logo/>
            </div>
        </div>
    );
};

export default Header;