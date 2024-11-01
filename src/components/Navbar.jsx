import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Головна
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Про нас
            </NavLink>
            <NavLink
                to="/cars"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Автомобілі
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                Контакти
            </NavLink>
        </nav>
    );
};

export default Navbar;
