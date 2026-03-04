import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import ChangeCategory from './changeCategory/ChangeCategory.js';
import CreateArticleAnnotation from './createArticleAnnotation/CreateArticleAnnotation.js';
import CreateArticleLine from './createArticleLine/CreateArticleLine.js';
import CreateArticleTextarea from './createArticleTextarea/CreateArticleTextarea.js';
import CreateArticleTitle from './createArticleTitle/CreateArticleTitle.js';
import CreateArticleField from './createArticleField/CreateArticleField.js';
import LogInButton from '../logIn/logInButton/LogInButton.js';
import Title from '../forAll/titles/Title.js';

import './createArticle.sass';

const CreateArticle = () => {
    return (
        <div className='createArticle'>
            <form 
                className='createArticle-container'
                action='#'
                method='post'
            >
                <div className='createArticle-container-text'>
                    <Title
                        className='title'
                        titleText='Напишите статью, от которой снесет голову (в хорошем смысле)!'
                        lineClassName='title-line'
                    />
                    <CreateArticleAnnotation
                        className='createArticleAnnotation'
                        annotationText='Перед вами - симулятор сидения за печатной машинкой, только можно ещё вставлять картинки, выбирать рубрики, выделять основную мысль и так далее и тому подобное. Если есть о чём порассуждать - заполняйте поля ниже и жмите "Отправить"! Как только наш редактор проверит вашу статью - она появится в общематериковском перечне статей!'
                    />
                    <hr className='title-line' />
                </div>
                <div className='createArticle-container-main'>
                    <div className='createArticle-container-main-changeCategory'>
                        <CreateArticleTitle 
                            className='createArticle-container-main-changeCategory createArticleTitle'
                            htmlFor='category'
                            text='Выберите категорию, к которой относится Ваша будущая статья:'
                        />
                        <ChangeCategory
                            name='changeCategory'
                            id='category'
                            className='changeCategory'     
                        />
                    </div>
                    <CreateArticleLine className='line' />
                    <div className='createArticle-container-main-articleTitle'>
                        <CreateArticleTitle 
                            className='createArticleTitle'
                            htmlFor='articleTitle'
                            text='Напишите название статьи:'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
                            id='articleTitle'
                            type='text'
                            placeholder='Напишите сюда заманчивый заголовок...'
                            required
                        />
                    </div>
                    <CreateArticleLine className='line' />
                    <div className='createArticle-container-main-text'>
                        <CreateArticleTitle 
                            className='createArticleTitle'
                            htmlFor='mainText'
                            text='Сюда вставьте (или напишите) непосредственно текст Вашей статьи:'
                        />
                        <CreateArticleTextarea
                            className='createArticleTextareaMainText'
                            id='mainText'
                            placeholder='Весь текст статьи сюда:'
                            required
                        />
                    </div>
                    <CreateArticleLine className='line' />
                    <div className='createArticle-container-main-quotes'>
                        <CreateArticleTitle
                             className='createArticleTitle createArticleQuotesHint'
                             htmlFor='quote'
                             text='В полях ниже напишите наиболее важные цитаты из Вашей статьи (если нет подходящей цитаты - оставьте поле пустым):'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
                            id='quote'
                            type='text'
                            placeholder='Сюда напишите первую цитату'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
                            type='text'
                            placeholder='Сюда напишите вторую цитату'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
                            type='text'
                            placeholder='Сюда напишите третью цитату'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
                            type='text'
                            placeholder='Сюда напишите четвертую цитату'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
                            type='text'
                            placeholder='Сюда напишите пятую цитату'
                        />
                    </div> 
                    <CreateArticleLine className='line' />   
                    <div className='createArticle-container-main-images'>
                        <CreateArticleTitle
                             className='createArticleTitle createArticleImagesHint'
                             text='Выберите изображения, которые хотите видеть в своей статье в качестве иллюстраций:'
                        />
                        <div className='createArticle-container-main-images-container'>
                            <input
                                type='file' 
                                id='1'
                                className='createArticle-container-main-images-container-input'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='1'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='2'
                                className='createArticle-container-main-images-container-input'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='2'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='3'
                                className='createArticle-container-main-images-container-input'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='3'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='4'
                                className='createArticle-container-main-images-container-input'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='4'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='5'
                                className='createArticle-container-main-images-container-input'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='5'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                        </div>
                    </div>
                    <CreateArticleLine className='line' />
                    <CreateArticleAnnotation
                        className='createArticleAnnotation'
                        annotationText='Проверьте ещё раз категорию, заголовок, основной текст, цитаты и будущие иллюстрации. Если вдруг передумали насчёт всего - можете нажать "Очистить" - кнопка сбросит все поля. Если же уверены - жмите "Отправить"!'
                    />
                    <CreateArticleLine className='line' />
                    <div className='createArticle-container-main-buttonContainer'>
                        <LogInButton
                            className='button createArticleButton'
                            type='reset'
                            buttonText='Очистить'
                        />
                        <LogInButton
                            className='button createArticleButton'
                            type='submit'
                            buttonText='Отправить'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateArticle;