import React from 'react';

import './title.sass';

type TitleProps = {
    className: string,
    titleText: string,
    lineClassName: string,
}

const Title = (props: TitleProps) => {
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