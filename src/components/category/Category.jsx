import React from 'react';
import { Link } from 'react-router';

import './category.sass';

import testImage from '../../images/test-image/test_image.png';

const Category = () => {
    return (
        <div className='category'>
            <div className='category-title'>
                <p>Категория</p>
                <hr className='category-title-line' />
            </div>
            <div className='category-cardsContainer'>
                
            </div>
        </div>
    );
};

export default Category;