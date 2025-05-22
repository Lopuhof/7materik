import React from "react";
import Articles from "../articles/Articles";
import "./css/category.css";

const CategoryExemplar = () => {
    return (
        <div className="category-exemplars">
            <Articles/>
            <Articles/>
            <Articles/>
        </div>
    );
};

export default CategoryExemplar;