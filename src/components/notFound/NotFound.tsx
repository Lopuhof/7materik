import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './notFound.sass';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFound-container'>
                <div className='notFound-container-title'>
                    <div className='notFound-container-title-xmark'>
                        <FontAwesomeIcon 
                            icon={ faXmark }
                            className='notFound-container-title-xmark-icon' 
                        />
                    </div>
                    <div className='notFound-container-title-text'>
                        404
                    </div>
                </div>
                <div className='notFound-container-subtitle'>
                    Простите, такой страницы не существует...
                </div>
            </div>
        </div>
    );
};

export default NotFound;