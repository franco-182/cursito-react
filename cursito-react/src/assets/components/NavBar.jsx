import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#calzado">Calzado</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;