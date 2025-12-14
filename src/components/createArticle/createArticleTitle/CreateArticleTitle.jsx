import React from 'react';

import './createArticleTitle.sass';

const CreateArticleTitle = (props) => {
    return (
        <div 
            className={ props.className }>
            { props.text }
        </div>
    );
};

export default CreateArticleTitle;