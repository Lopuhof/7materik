import React from 'react';

import avatar from '../../images/test-image/test-avatar.jpg';

import './userPage.sass';

const UserPage = () => {
    return (
        <div className='userPage'>
            <div className='userPage-container'>
                <div className='userPage-container-main'>
                    <div className='userPage-container-main-fotoAndNickname'>
                        <div className='userPage-container-main-fotoAndNickname-foto'>
                            <img 
                                src={avatar} 
                                alt='your-avatar'
                                className='userPage-container-main-fotoAndNickname-foto-avatar' 
                            />
                        </div>
                        <div className='userPage-container-main-fotoAndNickname-nickname'>
                            Остап Бендер 
                        </div>
                    </div>
                </div>
                <div className='userPage-container-articles'>
                    Тут будут карточки статей, написанные пользователем
                </div>
            </div>
        </div>
    );
};

export default UserPage;