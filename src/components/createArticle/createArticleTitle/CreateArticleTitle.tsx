import React from 'react';

import './createArticleTitle.sass';

type CreateArticleTitleProps = {
    className: string,
    htmlFor?: string,
    text: string,
}

const CreateArticleTitle = (props: CreateArticleTitleProps) => {
    return (
        <label 
            className={props.className}
            htmlFor={props.htmlFor}>
            { props.text }
        </label>
    );
};

export default CreateArticleTitle;