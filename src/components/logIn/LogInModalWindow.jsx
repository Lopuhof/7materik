import React from 'react';

import './logInModalWindow.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const LogInModalWindow = (props) => {
    return (
        <div 
            className='logInModalWindow'
            onClick={ props.closeModalWindow }>
            <div 
                className='logInModalWindow-content'
                onClick={ e => e.stopPropagation() }>
                <div className='logInModalWindow-content-box'>
                    <button 
                        className='logInModalWindow-content-box-faTimesCircle'
                        onClick={ props.closeModalWindow }>
                            <FontAwesomeIcon icon={ faTimesCircle } className='logInModalWindow-content-box-faTimesCircle-icon' />
                    </button>
                    <div className="logInModalWindow-content-box-hellow">
                        Добро пожаловать!
                    </div>
                    <FontAwesomeIcon icon={ faCircleUser } className='logInModalWindow-content-box-faCircleUser' />
                    <div className='logInModalWindow-content-box-identification'>
                        <div className='logInModalWindow-content-box-identification-logInHint'>Логин:</div>
                        <input
                            className='logInModalWindow-content-box-identification-logInInput' 
                            type='text' 
                            name='username' 
                            placeholder='сюда писать логин' 
                        />
                        <div className='logInModalWindow-content-box-identification-passwordHint'>Пароль:</div>
                        <input
                            className='logInModalWindow-content-box-identification-passwordInput' 
                            type='password' 
                            name='password' 
                            placeholder='сюда писать пароль' 
                        />
                    </div>
                    <button 
                        className='logInModalWindow-content-box-button'
                        >Войти
                    </button>
                    <div className='logInModalWindow-content-box-registration'>
                        <div className='logInModalWindow-content-box-registration-hint'>
                            Ещё нет аккаунта? Зарегистрируйтесь!
                        </div>
                        <button className='logInModalWindow-content-box-registration-button'>
                            Зарегистрироваться
                        </button>
                    </div>
                </div>
            </div>          
        </div>
    );
};

export default LogInModalWindow;