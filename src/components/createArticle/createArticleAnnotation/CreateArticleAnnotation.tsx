import React from 'react';

import './createArticleAnnotation.sass';

const CreateArticleAnnotation = (props) => {
    return (
        <div>
            <div className={props.className}>
                {props.annotationText}  
            </div>
        </div>
    );
};

export default CreateArticleAnnotation;