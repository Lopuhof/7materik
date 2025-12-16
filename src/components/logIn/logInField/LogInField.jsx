import React from 'react';

import './logInField.sass';

const LogInField = (props) => {
    return (
        <div>
            <input
                className={props.className} 
                name={props.name} 
                id={props.id}
                placeholder={props.placeholder} 
                type={props.type}
            />
        </div>
    );
};

export default LogInField;