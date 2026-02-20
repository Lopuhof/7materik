import React from 'react';

import './logInField.sass';

type LogInFieldProps = {
    className: string,
    name?: string,
    id: string,
    placeholder?: string,
    type: string,
}

const LogInField = (props: LogInFieldProps) => {
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