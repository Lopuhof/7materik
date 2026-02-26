import React from 'react';

import './leftPanel.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

type LeftPanelProps = {
    onClick?: () => void,
    openModalWindow: () => void,
    modal?: boolean,
    setModal?: React.Dispatch<React.SetStateAction<boolean>>,
    closeModalWindow?: () => void,
}

function LeftPanel(props: LeftPanelProps) {
    return (
        <div className='leftPanel'>
            <div className="leftPanel-leftPanelContent">
                <FontAwesomeIcon icon={ faCircleUser } className='leftPanel-leftPanelContent-faCircleUser' />
                <button 
                    className="leftPanel-leftPanelContent-logIn"
                    onClick ={ props.onClick }
                >Войти
                </button>
            </div>
        </div>
    );
};

export default LeftPanel;