import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Nav/Navbar.scss"; // Sửa lại đường dẫn nếu cần

class Navbar extends React.Component {
    handleClick = (path) => {
        console.log(`Navigating to: ${path}`);
    };

    render() {
        return (
            <div className="topnav">
                <NavLink 
                    to="/home" 
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => this.handleClick('/home')}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/register" 
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => this.handleClick('/register')}
                >
                    Register
                </NavLink>
                <NavLink 
                    to="/login" 
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => this.handleClick('/login')}
                >
                    Login
                </NavLink>
            </div>
        );
    }
}

export default Navbar;