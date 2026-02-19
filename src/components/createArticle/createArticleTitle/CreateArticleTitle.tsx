import React from 'react';

import './createArticleTitle.sass';

const CreateArticleTitle = (props) => {
    return (
        <label 
            className={ props.className }
            htmlFor={props.htmlFor}>
            { props.text }
        </label>
    );
};

export default CreateArticleTitle;