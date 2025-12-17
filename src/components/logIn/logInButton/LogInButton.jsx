import React from 'react';

import './logInButton.sass';

const LogInButton = (props) => {
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