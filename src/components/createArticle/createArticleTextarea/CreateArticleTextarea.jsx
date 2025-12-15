import React from 'react';

import './createArticleTextarea.sass';

const CreateArticleTextarea = (props) => {
    return (
        <div>
            <textarea 
                className={props.className}
                placeholder={props.placeholder} 
            >
            </textarea> 
        </div>
    );
};

export default CreateArticleTextarea;