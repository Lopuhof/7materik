import React from 'react';

import { Link } from 'react-router';

import CreateArticleField from '../createArticle/createArticleField/CreateArticleField';
import CreateArticleLine from '../createArticle/createArticleLine/CreateArticleLine';
import CreateArticleTitle from '../createArticle/createArticleTitle/CreateArticleTitle';
import LogInButton from '../logIn/logInButton/LogInButton';
import Title from '../forAll/titles/Title';
import Users from '../../data/usersData/Users';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import './registration.sass';

const Registration = () => {
    return (
        <div className='registration'>
            <div className='registration-container'>
                <div className='registration-container-text'>
                    <Title
                        className='title'
                        titleText='Добро пожаловать на 7 Материк! Заполняйте поля ниже и пишите, что душе угодно!'
                        lineClassName='title-line'
                    />
                    <form 
                        className='registration-container-form'
                        action='#'
                        method='post'
                    >
                        <div className='registration-container-form-text'>
                            <div className='registration-container-form-text-nickname'>
                                <CreateArticleTitle 
                                    className='createArticleTitle'
                                    htmlFor='nicknameField'
                                    text='Придумайте никнейм:'
                                />
                                <CreateArticleField 
                                    className='createArticleFieldTitle'
                                    id='nicknameField'
                                    type='text'
                                    placeholder='Сюда писать никнейм'
                                    required
                                />
                            </div>
                            <CreateArticleLine 
                                className='line'
                            />
                            <div className='registration-container-form-text-email'>
                                <CreateArticleTitle 
                                    className='createArticleTitle'
                                    htmlFor='emailField'
                                    text='Введите адрес электронной почты:'
                                />
                                <CreateArticleField 
                                    className='createArticleFieldTitle'
                                    id='emailField'
                                    type='email'
                                    placeholder='Сюда писать адрес электронной почты'
                                    required
                                />
                            </div>
                            <CreateArticleLine 
                                className='line'
                            />
                            <div className='registration-container-form-text-password'>
                                <CreateArticleTitle 
                                    className='createArticleTitle'
                                    htmlFor='passwordField'
                                    text='Придумайте пароль:'
                                />
                                <CreateArticleField 
                                    className='createArticleFieldTitle'
                                    id='passwordField'
                                    type='password'
                                    placeholder='Сюда писать пароль'
                                    required
                                />
                                <CreateArticleField 
                                    className='createArticleFieldTitle'
                                    id='dublePasswordField'
                                    type='password'
                                    placeholder='Подтвердите пароль'
                                    required
                                />
                            </div>
                            <CreateArticleLine 
                                className='line'
                            />
                        </div>
                        <div className='registration-container-form-image'>
                            <CreateArticleTitle 
                                className='createArticleTitle'
                                htmlFor='for-imageAvatar'
                                text='Загрузите сюда Вашу будущую аватарку:'
                            />
                            <label 
                                htmlFor='for-imageAvatar'
                                className='createArticle-container-main-images-container-field registration-image'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='for-imageAvatar'
                                className='createArticle-container-main-images-container-input'
                                action='#'
                                method='post'
                                accept='image/*'
                            />
                            <CreateArticleLine 
                                className='line'
                            />
                            <div className='registration-container-form-image-checkbox'>
                                <input 
                                    className='registration-container-form-image-checkbox-input'
                                    type='checkbox' 
                                    id='agree'
                                />
                                <label 
                                    className='registration-container-form-image-checkbox-label'
                                    htmlFor='agree'
                                >
                                    Я ознакомлен(а) и согласен(а) с условиями пользования платформой "7 Материк"
                                </label>
                                <div className='registration-container-form-image-checkbox-rules'>
                                    Их можно прочитать <Link to='/rules' className='registration-container-form-image-checkbox-rules-link'>здесь</Link>.
                                </div>
                            </div>
                            <CreateArticleLine
                                className='line'
                            />
                            <div className='registration-container-form-image-buttonContainer'>
                                <LogInButton
                                    className='button'
                                    type='reset'
                                    buttonText='Очистить'
                                />
                                <LogInButton
                                    className='button'
                                    type='submit'
                                    buttonText='Зарегистрироваться'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;