import React from "react";
import "./css/style.css";
import Logo from "../Logo";
import Search from "../Search";
import Log_in from "../Log_in";

const Header = () => {
    return (
        <div>
            <div className="background-fone">
                <Logo/>
                <Search/>
                <Log_in/>
            </div>
        </div>
    );
};

export default Header;