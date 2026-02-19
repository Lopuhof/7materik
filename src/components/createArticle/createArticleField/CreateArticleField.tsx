import React from 'react';

import './createArticleField.sass';

const CreateArticleField = (props) => {
    return (
        <div>
            <input
                className={props.className}
                id={props.id} 
                type={props.type} 
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default CreateArticleField;