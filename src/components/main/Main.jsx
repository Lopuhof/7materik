import React from 'react';
import {useState} from 'react';
import "../header/background/css/background.css";
import Category from "./../category/Category";
import CategoryExemplar from "../category/CategoryExemplar";
import ArticlesRedact from "../articlesRedact/ArticlesRedact";

//Добавляем иконочные шрифты FontAwesome

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    
const [articlesRedactActive, setArticlesRedactActive] = useState(true);

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
                    <button className="test-button" onClick={() => setArticlesRedactActive(true)}>
                        test-button
                    </button>
                </div>
                <hr className="main-content-line"/>
                <Category/>
                <hr className="main-content-line"/>                      
            </main> 
            <CategoryExemplar/> 
            <ArticlesRedact active={articlesRedactActive} setArticlesRedactActive={setArticlesRedactActive}/>
        </div>
    );
};

export default Main;