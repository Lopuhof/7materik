import React from 'react';

import './leftPanel.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const LeftPanel = () => {
    return (
        <div className='leftPanel'>
            <FontAwesomeIcon icon={ faCircleUser } className='leftPanel-faCircleUser' />
        </div>
    );
};

export default LeftPanel;