import React from 'react';

const User = (props) => {
    return {
        id: props.id,
        nickname: props.nickname,
        email: props.email,
        password: props.password,
        image: props.image,
    }
};

export default User;