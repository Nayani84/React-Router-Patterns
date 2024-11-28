import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Nav = ({ dogs }) => {
    return (
        <nav className="Navbar">
            <NavLink to="/dogs" className={({ isActive }) => isActive ? "active-link" : "link"}>
                Home
            </NavLink>
            {dogs.map(dog => (
                <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} className={({ isActive }) => isActive ? "active-link" : "link"}>
                    {dog.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Nav;