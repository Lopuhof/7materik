import React from 'react';
import { Link } from 'react-router';

import LogInButton from './logInButton/LogInButton.js';
import LogInField from './logInField/LogInField.js';
import LogInHint from './logInHint/LogInHint.js';
import Registration from '../registration/Registration.js';

import './logInModalWindow.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const LogInModalWindow = (props) => {
    return (
        <div 
            className='logInModalWindow'
            onClick={ props.closeModalWindow }>
            <div className='logInModalWindow-content'>
                <form 
                    className='logInModalWindow-content-box'
                    method='post'
                    action='#'
                    onClick={ e => e.stopPropagation() }
                >
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
                            htmlFor='user'
                            hintText='Логин'
                        />
                        <LogInField 
                            className='field'
                            id='user'
                            placeholder='сюда писать логин'
                            name='username'
                            type='text'
                        />
                        <LogInHint 
                            className='logInModalWindow-content-box-identification-logInHint hint'
                            htmlFor='userPassword'
                            hintText='Пароль'
                        />
                        <LogInField 
                            className='field'
                            id='userPassword'
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
                        <Link 
                            className='registrationLink'
                            to='/registration' 
                            element={ <Registration /> }>
                            <LogInButton 
                                className='logInModalWindow-content-box-registration-button button'
                                buttonText='Зарегистрироваться'
                                onClick={ props.closeModalWindow }
                            />
                        </Link>
                    </div>
                </form>
            </div>          
        </div>
    );
};

export default LogInModalWindow;