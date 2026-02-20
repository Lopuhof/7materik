import React from 'react';

import './logInHint.sass';

type LogInHintProps = {
    className: string,
    htmlFor: string,
    hintText: string,
}

const LogInHint = (props: LogInHintProps) => {
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