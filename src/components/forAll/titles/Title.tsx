import React from 'react';

import './title.sass';

const Title = (props) => {
    return (
        <div>
            <div className={props.className}>
                {props.titleText}
            </div>
            <hr className={props.lineClassName} />
        </div>
    );
};

export default Title;