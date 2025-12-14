import React from 'react';

import './logInHint.sass';

const LogInHint = (props) => {
    return (
        <div>
            <div className={props.className}>
                {props.hintText}
            </div>
        </div>
    );
};

export default LogInHint;