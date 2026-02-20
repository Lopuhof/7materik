import React from 'react';

import './createArticleLine.sass';

type CreateArticleLineProps = {
    className: string,
}

const CreateArticleLine = (props: CreateArticleLineProps) => {
    return (
        <div>
            <hr className={props.className} />
        </div>
    );
};

export default CreateArticleLine;