import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <nav className="navBar">
            <div>
                <Link to="/">Main</Link>
                <Link to="/history">History</Link>
            </div>
        </nav>
    )
}

export default Header;