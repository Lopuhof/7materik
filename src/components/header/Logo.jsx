import React from "react";
import "./background/css/style.css";

//Добавляем изображения

import logo_img from "./img/logo.png";

//Добавляем шрифты из FontAwesome

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faBookOpen} className="logo-lines-img-icon"/>
                </div>
                <hr className="logo-lines-right"/>
            </div>
            <div className="logo-slogan">
                <span className="logo-slogan-text">Иногда лучше читать, чем говорить...</span>
            </div>
            <div className="solid-line">
                <hr className="solid-line-hr"/>
            </div>
        </div>
    );
};

export default Logo;