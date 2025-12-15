import React from 'react';

import './createArticleField.sass';

const CreateArticleField = (props) => {
    return (
        <div>
            <input
                className={props.className} 
                type={props.type} 
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default CreateArticleField;