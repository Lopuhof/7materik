import React from "react";
import "./css/category.css";

const Category = () => {
    return (
        <div className="category">
            <div className="category-content">
                <nav className="category-content-nav">
                    <div className="category-content-nav-history category-content-nav-link">
                        История
                    </div>
                    <div className="category-content-nav-literature category-content-nav-link">
                        Литература
                    </div>
                    <div className="category-content-nav-fashion category-content-nav-link">
                        Мода
                    </div>
                    <div className="category-content-nav-cinema category-content-nav-link">
                        Кино
                    </div>
                    <div className="category-content-nav-psyhology category-content-nav-link">
                        Психология
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Category;