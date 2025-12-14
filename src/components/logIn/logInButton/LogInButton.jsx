import React from 'react';

import './logInButton.sass';

const LogInButton = (props) => {
    return (
        <div>
            <button 
                className={props.className}
                >{props.buttonText}
            </button>
        </div>
    );
};

export default LogInButton;