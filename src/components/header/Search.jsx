import React from 'react';

const Search = () => {
    return (
        <div className="form-container">
            <form action="#" className="form-container-search">
                <input type="text" placeholder="Что будем искать?" className="form-container-search-input"/>
                <button className="form-container-search-btn">Найти <i className="fa fa-book" aria-hidden="true"></i></button>
            </form>
        </div>
    );
};

export default Search;