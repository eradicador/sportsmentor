import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import background from "../images/navbarbg.png"

export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="item text-primary">{currentUser.email}</Link>
                    <Logout />
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login" className="item text-primary">Login</Link>
                    <Link to="/register" className="item text-primary">Register</Link>
                </>
            )
        }

    }

    return (
        <div className="ui inverted menu" style={{ backgroundImage: `url(${background})` }}>
            <Link to="/" className="item text-primary">SportsMentor</Link>
            {isAuthenticated ? <Link to="/studyup" className="item text-primary">Study Up</Link> : ""}
            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;
