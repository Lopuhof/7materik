import React from 'react';

import './createArticleField.sass';

type CreateArticleFieldProps = {
    className: string,
    id?: string,
    type: string,
    placeholder: string,
    required?: boolean,
}

const CreateArticleField = (props: CreateArticleFieldProps) => {
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