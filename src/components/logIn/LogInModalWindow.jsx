import React from 'react';

import LogInButton from './logInButton/LogInButton';
import LogInField from './logInField/LogInField';
import LogInHint from './logInHint/LogInHint';

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
                        <LogInHint 
                            className='logInModalWindow-content-box-identification-logInHint hint'
                            hintText='Логин'
                        />
                        <LogInField 
                            className='field logInModalWindow-content-box-identification-logInField'
                            placeholder='сюда писать логин'
                            name='username'
                        />
                        <LogInHint 
                            className='logInModalWindow-content-box-identification-logInHint hint'
                            hintText='Пароль'
                        />
                        <LogInField 
                            className='field logInModalWindow-content-box-identification-passwordField'
                            placeholder='сюда писать пароль'
                            name='password'
                            type='password'
                        />
                    </div>
                    <LogInButton 
                        className='logInModalWindow-content-box-button button'
                        buttonText='Войти'
                    />
                    <div className='logInModalWindow-content-box-registration'>
                        <div className='logInModalWindow-content-box-registration-hint'>
                            Ещё нет аккаунта? Зарегистрируйтесь!
                        </div>
                        <LogInButton 
                            className='logInModalWindow-content-box-registration-button button'
                            buttonText='Зарегистрироваться'
                        />
                    </div>
                </div>
            </div>          
        </div>
    );
};

export default LogInModalWindow;