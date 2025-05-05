import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <div className="form-container">
            <form action="#" className="form-container-search">
                <input type="text" placeholder="Что будем искать?" className="form-container-search-input"/>
                <button className="form-container-search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-magnifying-glass"/>
                </button>
            </form>
        </div>
    );
};

export default Search;