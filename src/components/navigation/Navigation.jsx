import React from 'react';

import { Routes, Route, Link } from 'react-router';

import './navigation.sass';

import Category from '../category/Category';
import Homepage from '../homepage/Homepage';
import Literature from '../category/categoryElements/literature/Literature';
import Art from '../category/categoryElements/art/Art';
import History from '../category/categoryElements/history/History';
import Fashion from '../category/categoryElements/fashion/Fashion';
import Science from '../category/categoryElements/science/Science';
import Library from '../category/categoryElements/library/Library';
import NotFound from '../NotFound';

const Navigation = () => {
    return (
        <div className='navigation'>
            <nav className='navigation-container'>
                <Link to='/' className='navigation-container-item'>Главная</Link>
                |
                <Link to='/literature' className='navigation-container-item'>Литература</Link>
                |
                <Link to='/art' className='navigation-container-item'>Искусство</Link>
                |
                <Link to='/history' className='navigation-container-item'>История</Link>
                |
                <Link to='/fashion' className='navigation-container-item'>Мода</Link>
                |
                <Link to='/science' className='navigation-container-item'>Наука</Link>
                |
                <Link to='/library' className='navigation-container-item'>Библиотечное дело</Link>
                |
                <Link to='/category' className='navigation-container-item'>Тестовая категория</Link>
            </nav>
            <Routes>
                <Route path='/' element={ <Homepage /> }></Route>
                <Route path='/literature' element={ <Literature /> }></Route>
                <Route path='/art' element={ <Art /> }></Route>
                <Route path='/history' element={ <History /> }></Route>
                <Route path='/fashion' element={ <Fashion /> }></Route>
                <Route path='/science' element={ <Science /> }></Route>
                <Route path='/library' element={ <Library/> }></Route>
                <Route path='/category' element={ <Category /> }></Route>
                {/* /* <Route path='*' element={ <NotFound/> }></Route> */ }
            </Routes>
        </div>        
    );
};

export default Navigation;