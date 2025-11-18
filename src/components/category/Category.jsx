import React from 'react';

import CategoryTitle from './categoryHeader/CategoryTitle';
import CategoryElements from './categoryElements/CategoryElements';

import './category.sass';

const Category = () => {
    return (
        <div className='category'>
            <CategoryTitle />
            <CategoryElements />
        </div>
    );
};

export default Category;