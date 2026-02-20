import React from 'react';

import './changeCategory.sass';

type ChangeCategoryProps = {
    name: string,
    id: string,
    className: string,
}

const ChangeCategory = (props: ChangeCategoryProps) => {
    return (
        <div>
            <select 
                name={props.name} 
                id={props.id} 
                className={props.className}
            >
                <option value="literature">Литература</option>
                <option value="art">Искусство</option>
                <option value="history">История</option>
                <option value="fashion">Мода</option>
                <option value="science">Наука</option>
                <option value="library">Библиотечное дело</option>
            </select>
        </div>
    );
};

export default ChangeCategory;