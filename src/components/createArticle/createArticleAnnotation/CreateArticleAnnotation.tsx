import React from 'react';

import './createArticleAnnotation.sass';

type CreateArticleAnnotationProps = {
    className: string,
    annotationText: string,
}

const CreateArticleAnnotation = (props: CreateArticleAnnotationProps) => {
    return (
        <div>
            <div className={props.className}>
                {props.annotationText}  
            </div>
        </div>
    );
};

export default CreateArticleAnnotation;