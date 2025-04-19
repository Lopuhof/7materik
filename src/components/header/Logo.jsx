import React from 'react';
import './background/css/style.css';

//Добавляем изображения

import logo_img from './img/logo.png';
import logo_img_magazine from './img/logo_magazine.png';

const Logo = () => {
    return (
        <div className="logo">
            <div className="logo-main">
                <div className="logo-main-img">
                    <img src={logo_img} alt="Невероятно эффектное лого" className="logo-main-img-png"/>
                </div>
                <div className="logo-main-text">Седьмой <br></br> материк</div>
            </div>
            <div className="logo-lines">
                <hr className="logo-lines-left"/>
                <div className="logo-lines-img">
                    <img src={logo_img_magazine} alt="Тут силуэт журнала" className="logo-lines-magazine"/></div>
                <hr className="logo-lines-right"/>
            </div>
            <div className="logo-slogan">
                <span className="logo-slogan-text">Иногда лучше читать, чем говорить...</span>
            </div>
        </div>
    );
};

export default Logo;