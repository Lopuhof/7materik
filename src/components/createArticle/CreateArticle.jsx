import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import ChangeCategory from './changeCategory/ChangeCategory';
import CreateArticleLine from './createArticleLine/CreateArticleLine';
import CreateArticleTextarea from './createArticleTextarea/CreateArticleTextarea';
import CreateArticleTitle from './createArticleTitle/CreateArticleTitle';
import CreateArticleField from './createArticleField/CreateArticleField';

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
                    <div className='createArticle-container-text-title'>
                        Напишите статью, от которой голова идёт кругом! 
                    </div>
                    <hr className='createArticle-container-text-line' />
                    <div className='createArticle-container-text-annotation'>
                        Перед вами - симулятор сидения за печатной машинкой, только можно ещё вставлять картинки, выбирать рубрики, выделять основную мысль и так далее и тому подобное. Если есть о чём порассуждать - заполняйте поля ниже и жмите "Отправить"! Как только наш редактор проверит вашу статью - она появится в общематериковском перечне статей!  
                    </div>
                    <hr className='createArticle-container-text-line' />
                </div>
                <div className='createArticle-container-main'>
                    <div className='createArticle-container-main-changeCategory'>
                        <CreateArticleTitle 
                            className='createArticle-container-main-changeCategory createArticleTitle'
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
                            text='Напишите название статьи:'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
                            type='text'
                            placeholder='Напишите сюда заманчивый заголовок...'
                        />
                    </div>
                    <CreateArticleLine className='line' />
                    <div className='createArticle-container-main-text'>
                        <CreateArticleTitle 
                            className='createArticleTitle'
                            text='Сюда вставьте (или напишите) непосредственно текст Вашей статьи:'
                        />
                        <CreateArticleTextarea
                            className='createArticleTextareaMainText'
                            placeholder='Весь текст статьи сюда:'
                        />
                    </div>
                    <CreateArticleLine className='line' />
                    <div className='createArticle-container-main-quotes'>
                        <CreateArticleTitle
                             className='createArticleTitle createArticleQuotesHint'
                             text='В полях ниже напишите наиболее важные цитаты из Вашей статьи (если нет подходящей цитаты - оставьте поле пустым):'
                        />
                        <CreateArticleField
                            className='createArticleFieldTitle'
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
                                id='for-image'
                                className='createArticle-container-main-images-container-input'
                                action='#'
                                method='post'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='for-image'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='for-image'
                                className='createArticle-container-main-images-container-input'
                                action='#'
                                method='post'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='for-image'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='for-image'
                                className='createArticle-container-main-images-container-input'
                                action='#'
                                method='post'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='for-image'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='for-image'
                                className='createArticle-container-main-images-container-input'
                                action='#'
                                method='post'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='for-image'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                            <input 
                                type='file' 
                                id='for-image'
                                className='createArticle-container-main-images-container-input'
                                action='#'
                                method='post'
                                accept='image/*'
                            />
                            <label 
                                htmlFor='for-image'
                                className='createArticle-container-main-images-container-field'
                            >
                                <FontAwesomeIcon 
                                    icon={ faUpload } className='createArticle-container-main-images-container-field-icon' />
                            </label>
                        </div>
                    </div>
                    <CreateArticleLine className='line' />
                </div>
            </form>
        </div>
    );
};

export default CreateArticle;