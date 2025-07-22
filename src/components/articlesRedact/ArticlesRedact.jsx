import React from 'react';
import "./css/articlesRedact.css";

//Подключаем иконочные шрифты

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

const ArticlesRedact = ({active, setActive}) => {
    return (
        <div className="articlesRedact">
            <div className="articlesRedact-content">
                <div className="articlesRedact-content-text">
                    <div className="articlesRedact-content-text-title">Напиши статью своей мечты!</div>
                    <hr className="articlesRedact-content-text-line"/>
                    <div className="articlesRedact-content-text-annotation">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed placeat saepe voluptate amet sunt blanditiis hic in. Totam fugit tempora veritatis quae molestias laboriosam sequi esse optio neque quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vitae veniam eos, doloribus optio doloremque accusamus dicta pariatur repudiandae fugit perferendis culpa fugiat, nulla dolor illo officia voluptatem magni dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae blanditiis illum corrupti cumque voluptatibus atque, omnis illo incidunt eligendi suscipit laboriosam sit fugit ducimus vitae optio quos rem magnam.
                    </div>
                    <hr className="articlesRedact-content-text-line"/>
                </div>
                <div className="articlesRedact-content-forms">
                    <div className="articlesRedact-content-forms-articlesTitle">
                        <div className="articlesRedact-content-forms-articlesTitle-hint">
                            Название статьи:
                        </div>
                        <form action="#">
                            <input type="text" className="articlesRedact-content-forms-articlesTitle-input" placeholder="Напишите сюда название статьи..."/>
                        </form>
                    </div>
                    <div className="articlesRedact-content-forms-articlesText-hint">
                        Текст статьи:
                    </div>
                    <form action="#" className="articlesRedact-content-forms-textareaForm">
                        <textarea placeholder="Пишите (или вставьте) сюда текст вашей статьи" className="articlesRedact-content-forms-textareaForm-textarea"/>
                        <button className="articlesRedact-content-forms-textareaForm-btn">
                            Очистить
                        </button>
                    </form>
                    <div className="articlesRedact-content-forms-articlesCategory">
                        <div className="articlesRedact-content-forms-articlesCategory-hint">
                            Выберите категорию, к которой относится Ваша статья
                        </div>
                        <form action="#">
                            <select name="category" id="#" className="articlesRedact-content-forms-articlesCategory-category">
                                <option value="history">История</option>
                                <option value="literature">Литература</option>
                                <option value="fashion">Мода</option>
                                <option value="cinema">Кино</option>
                                <option value="psyhology">Психология</option>
                            </select>
                        </form>
                    </div>
                    <div className="articlesRedact-content-forms-articlesImages">
                        <div className="articlesRedact-content-forms-articlesImages-hint">
                            Вставьте изображения, которые будут использоваться в качестве иллюстраций
                        </div>
                        <form action="#" className="articlesRedact-content-forms-articlesImages-manyInputs">
                            <label htmlFor="" className="articlesRedact-content-forms-articlesImages-manyInputs-label">
                                <FontAwesomeIcon icon={faImage} className="fa articlesRedact-content-forms-articlesImages-manyInputs-label-image"/>
                                <input type="file" className="articlesRedact-content-forms-articlesImages-manyInputs-label-input"/>
                            </label>
                            <label htmlFor="" className="articlesRedact-content-forms-articlesImages-manyInputs-label">
                                <FontAwesomeIcon icon={faImage} className="fa articlesRedact-content-forms-articlesImages-manyInputs-label-image"/>
                                <input type="file" className="articlesRedact-content-forms-articlesImages-manyInputs-label-input"/>
                            </label>
                            <label htmlFor="" className="articlesRedact-content-forms-articlesImages-manyInputs-label">
                                <FontAwesomeIcon icon={faImage} className="fa articlesRedact-content-forms-articlesImages-manyInputs-label-image"/>
                                <input type="file" className="articlesRedact-content-forms-articlesImages-manyInputs-label-input"/>
                            </label>
                            <label htmlFor="" className="articlesRedact-content-forms-articlesImages-manyInputs-label">
                                <FontAwesomeIcon icon={faImage} className="fa articlesRedact-content-forms-articlesImages-manyInputs-label-image"/>
                                <input type="file" className="articlesRedact-content-forms-articlesImages-manyInputs-label-input"/>
                            </label>
                            <label htmlFor="#" className="articlesRedact-content-forms-articlesImages-manyInputs-label">
                                <FontAwesomeIcon icon={faImage} className="fa articlesRedact-content-forms-articlesImages-manyInputs-label-image"/>
                                <input type="file" className="articlesRedact-content-forms-articlesImages-manyInputs-label-input"/>
                            </label>
                        </form>
                    </div>
                    <div className="articlesRedact-content-forms-articlesQuotes">
                        <div className="articlesRedact-content-forms-articlesQuotes-hint">
                            Напишите наиболее значимые цитаты, которые будут выделены отдельно в тексте статьи...
                        </div>
                        <form action="#">
                            <input type="text" className="articlesRedact-content-forms-articlesQuotes-input"/>
                            <input type="text" className="articlesRedact-content-forms-articlesQuotes-input"/>
                            <input type="text" className="articlesRedact-content-forms-articlesQuotes-input"/>
                            <input type="text" className="articlesRedact-content-forms-articlesQuotes-input"/>
                            <input type="text" className="articlesRedact-content-forms-articlesQuotes-input"/>  
                        </form>
                    </div>
                </div>
                <hr className="articlesRedact-content-text-line"/>
                <div className="articlesRedact-content-lastHint">
                    Проверьте всё, что написали: синтаксис, логику, пунктуацию, добавленные иллюстрации и нажмите кнопку "Отправить".
                </div>
                <form action="#" className="articlesRedact-content-lastForm">
                    <button className="articlesRedact-content-lastForm-btn">
                        Отправить
                    </button>
                    <button className="articlesRedact-content-lastForm-btn">
                        Отмена
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ArticlesRedact;