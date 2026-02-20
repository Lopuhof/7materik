import React from 'react';

import './createArticleTextarea.sass';

type CreateArticleTextareaProps = {
    className: string,
    id: string,
    placeholder: string,
    required: boolean
}

const CreateArticleTextarea = (props: CreateArticleTextareaProps) => {
    return (
        <div>
            <textarea 
                className={props.className}
                id={props.id}
                placeholder={props.placeholder} 
                required={props.required}
            >
            </textarea> 
        </div>
    );
};

export default CreateArticleTextarea;