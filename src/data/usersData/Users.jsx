import { useId } from 'react';
import React from 'react';

import Registration from '../../components/registration/Registration';
import User from './User';

const usersArray = [];

const Users = (props) => {
    const userId = useId();
    let user = {
        id: 28,
        nickname: document.getElementById('nicknameField'),
    }
    usersArray.push(user);
    return (
        <>
            <div>
                <p>id-пользователя: {user.nickname}</p>
            </div>
        </>
    );
};

export default Users;