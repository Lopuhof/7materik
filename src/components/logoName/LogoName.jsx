import React from 'react';

import './logoName.sass';

const LogoName = () => {
    return (
        <div className='logoAndName'>
            <div className="logoAndName-logo"></div>
            <div className="logoAndName-name">
                <span className='logoAndName-name-seven'>
                    Седьмой
                </span><br />
                <span className="logoAndName-name-materik">
                    материк
                </span> 
            </div>
            <span className="logoAndName-slogan">
                Иногда лучше читать, чем говорить...
            </span>
        </div>
    );
};

export default LogoName;