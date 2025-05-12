import React from 'react';
import "../header/background/css/style.css";
import Category from "./../category/Category";
import CategoryExemplar from "../category/CategoryExemplar";

//Добавляем иконочные шрифты FontAwesome

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    return (
        <div className="main">
            <main className="main-content">
                <div className="main-content-login">
                    <button className="main-content-login-btn">
                        <FontAwesomeIcon icon={faUser} className="fa main-content-login-btn-icon"/>
                        Войти
                    </button>
                    <button className="main-content-login-register">
                        Зарегистрироваться
                    </button>
                </div>
                <hr className="main-content-line"/>
                <Category/>
                <hr className="main-content-line"/>                      
            </main> 
            <CategoryExemplar/> 
        </div>
    );
};

export default Main;