import React from 'react';
import "./css/articlesRedact.css";

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
                    <div className="articlesRedact-content-forms-articlesText"></div>
                    <div className="articlesRedact-content-forms-articlesCategory"></div>
                    <div className="articlesRedact-content-forms-articlesImages"></div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesRedact;