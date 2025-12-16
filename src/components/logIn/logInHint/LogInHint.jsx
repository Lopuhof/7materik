import React from 'react';

import './logInHint.sass';

const LogInHint = (props) => {
    return (
        <div>
            <label 
                className={props.className}
                htmlFor={props.htmlFor}>
                    {props.hintText}
            </label>
        </div>
    );
};

export default LogInHint;