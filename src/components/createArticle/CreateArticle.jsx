import React from 'react';

import ChangeCategory from './changeCategory/ChangeCategory';
import CreateArticleTitle from './createArticleTitle/CreateArticleTitle';

import './createArticle.sass';

const CreateArticle = () => {
    return (
        <div className='createArticle'>
            <div className='createArticle-container'>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateArticle;