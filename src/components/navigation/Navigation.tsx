import React from 'react';

import { Routes, Route, NavLink } from 'react-router';

import './navigation.sass';

import Art from '../category/categoryElements/art/Art.js';
import Category from '../category/Category.js';
import Fashion from '../category/categoryElements/fashion/Fashion.js';
import History from '../category/categoryElements/history/History.js';
import Homepage from '../homepage/Homepage.js';
import Library from '../category/categoryElements/library/Library.js';
import Literature from '../category/categoryElements/literature/Literature.js';
import NotFound from '../notFound/NotFound.js';
import Registration from '../registration/Registration.js';
import Science from '../category/categoryElements/science/Science.js';
import UserPage from '../userPage/UserPage.js';

const Navigation = () => {
    return (
        <div className='navigation'>
            <nav className='navigation-container'>
                <NavLink to='/' className='navigation-container-item'>Главная</NavLink>
                |
                <NavLink to='/literature' className='navigation-container-item'>Литература</NavLink>
                |
                <NavLink to='/art' className='navigation-container-item'>Искусство</NavLink>
                |
                <NavLink to='/history' className='navigation-container-item'>История</NavLink>
                |
                <NavLink to='/fashion' className='navigation-container-item'>Мода</NavLink>
                |
                <NavLink to='/science' className='navigation-container-item'>Наука</NavLink>
                |
                <NavLink to='/library' className='navigation-container-item'>Библиотечное дело</NavLink>
                |
                <NavLink to='/category' className='navigation-container-item'>Тестовая категория</NavLink>
                |
                <NavLink to='/userPage' className='navigation-container-item'>UserPage</NavLink>
                |
                <NavLink to='/test' className='navigation-container-item'>Test</NavLink>
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
                <Route path='/userPage' element={ <UserPage /> }></Route>
                <Route path='/registration' element={ <Registration /> }></Route>
                <Route path='*' element={ <NotFound /> }></Route>
            </Routes>
        </div>        
    );
};

export default Navigation;