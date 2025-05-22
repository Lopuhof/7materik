import React from "react";
import "./css/background.css";
import Logo from "../Logo";
import Search from "../Search";

const Header = () => {
    return (
        <div>
            <div className="background-fone">
                <Logo/>
                <Search/>
            </div>
        </div>
    );
};

export default Header;