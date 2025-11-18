import React from 'react';

import './categoryElements.sass';

const CategoryElements = () => {
    return (
        <div className='categoryElementsContainer'>
            <div className="categoryElementsContainer-item">Литература</div>
            <div className="categoryElementsContainer-item">Искусство</div>
            <div className="categoryElementsContainer-item">История</div>
            <div className="categoryElementsContainer-item">Мода</div>
            <div className="categoryElementsContainer-item">Наука</div>
        </div>
    );
};

export default CategoryElements;