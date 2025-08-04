import React from "react";
import "./css/articles.css";
import ArticleImage from "./image/goodImage.jpg";
import cinema from "../../data/cinema";
import fashion from "../../data/fashion";
import history from "../../data/history";
import literature from "../../data/literature";
import psyhologies from "../../data/psyhologies";

import {useState} from "react";

const Articles = () => {
    return (
        <div className="articles">
            <div className="articles-exemplar">
                <div className="articles-exemplar-photo">
                    <img src={ArticleImage} alt="изображение из статьи" className="articles-exemplar-photo-img"/>
                </div>
                <div className="articles-exemplar-text">
                    <div className="articles-exemplar-text-top-of-card"></div> 
                    <div className="articles-exemplar-text-title">
                        Где искать потерянные в библиотеке книги???
                    </div>
                    <div className="articles-exemplar-text-author">
                        <p>Иван Иванов</p>
                    </div>
                    <div className="articles-exemplar-text-annotation">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima suscipit recusandae quas maxime ratione unde mollitia quia aut! At, perspiciatis similique voluptatum quis illum consectetur consequatur ea in exercitationem!
                        <div className="articles-exemplar-text-annotation-data">
                        23 ноября 1991 года
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default Articles;