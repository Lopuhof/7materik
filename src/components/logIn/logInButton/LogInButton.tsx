import React, { type MouseEventHandler } from 'react';

import './logInButton.sass';

type LogInButtonProps = {
    className: string,
    type: "submit" | "reset" | "button",
    onClick?: MouseEventHandler<HTMLButtonElement>, 
    buttonText: string,
}

const LogInButton = (props: LogInButtonProps) => {
    return (
        <div>
            <button 
                className={props.className}
                type={props.type}
                onClick={props.onClick}
                >{props.buttonText}
            </button>
        </div>
    );
};

export default LogInButton;