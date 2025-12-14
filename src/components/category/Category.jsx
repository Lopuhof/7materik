import React from 'react';
import { Link } from 'react-router';

import './category.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
    return (
        <div className='category'>
            <div className='category-title'>
                <p>Категория</p>
                <hr className='category-title-line' />
            </div>
            <div className='category-cardsContainer'>
                <div className='category-cardsContainer-card'>
                    <div className='category-cardsContainer-card-title'>
                        Заголовок статьи (может даже длинный)
                    </div>
                    <div className='category-cardsContainer-card-authorAndDataContainer'>
                        <Link to='/user' className='category-cardsContainer-card-authorAndDataContainer-author'>
                            <FontAwesomeIcon icon={ faUser } className='category-cardsContainer-card-authorAndDataContainer-author-icon' />
                            <div className='category-cardsContainer-card-authorAndDataContainer-author-name'>
                                Денис Гуляев
                            </div>
                        </Link>
                        <Link to='/user' className='category-cardsContainer-card-authorAndDataContainer-data'>
                            <FontAwesomeIcon icon={ faCalendar } className='category-cardsContainer-card-authorAndDataContainer-data-icon' />
                            <div className='category-cardsContainer-card-authorAndDataContainer-data-DDMMYY'>
                                23.11.1991
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;