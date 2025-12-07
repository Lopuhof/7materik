import React from 'react';

import { Routes, Route, Link } from 'react-router';

import './navigation.sass';
import Homepage from '../homepage/Homepage';
import Literature from '../category/categoryElements/literature/Literature';

const Navigation = () => {
    return (
        <div className="navigation">
            <nav className='navigation-container'>
                <Link to='/homepage' className='navigation-container-categoryElementsContainer-item'>Главная</Link>
                <Link to='/literature' className='navigation-container-categoryElementsContainer-item'>Литература</Link>
                <Link to='/art' className='navigation-container-categoryElementsContainer-item'>Искусство</Link>
                <Link to='/history' className='navigation-container-categoryElementsContainer-item'>История</Link>
                <Link to='/fashion' className='navigation-container-categoryElementsContainer-item'>Мода</Link>
                <Link to='/science' className='navigation-container-categoryElementsContainer-item'>Наука</Link>
                <Link to='/library' className='navigation-container-categoryElementsContainer-item'>Библиотечное дело</Link>
            </nav>

            <Routes>
                <Route path='/homepage' element={ <Homepage /> }/>
                <Route path='/literature' element={ <Literature /> }/>
                {/* <Route path='/art' element={ <Art /> }/>
                <Route path='/history' element={ <History /> }/>
                <Route path='/fashion' element={ <Fashion /> }/>
                <Route path='/science' element={ <Science /> }/>
                <Route path='/library' element={ <Library /> }/> */}
            </Routes>

        </div>        
    );
};

export default Navigation;