import React from 'react';

import './categoryElements.sass';

import { Link } from 'react-router';

const CategoryElements = () => {
    return (
        <div className='categoryElementsContainer'>
            <Link to='/literature' className='categoryElementsContainer-item'>Литература</Link>
            <Link to='/art' className='categoryElementsContainer-item'>Искусство</Link>
            <Link to='/history' className='categoryElementsContainer-item'>История</Link>
            <Link to='/fashion' className='categoryElementsContainer-item'>Мода</Link>
            <Link to='/science' className='categoryElementsContainer-item'>Наука</Link>
            <Link to='/library' className='categoryElementsContainer-item'>Библиотечное дело</Link>
        </div>
    );
};

export default CategoryElements;