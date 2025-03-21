import { Link } from "react-router-dom";
import './navbar.css';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useState } from "react";
import mlogo from '../assets/mlogo.jpg';

export default function Navibar() {

    // State management for hamburger menu open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Function to toggle hamburger menu
    function toggleMenu() {
    setIsMenuOpen(isMenuOpen === false ? true : false);
    }
    
    return (
        <nav className="navbar">
            <div className="logo"><a href="/portfolio/"><img src={mlogo} alt="logo" /></a></div>
            <div className="navbar-container">
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {isMenuOpen ? <GiCancel size={30}/> : <GiHamburgerMenu size={30}/>}
                </div>
                <div className="nav-links"> 
                {isMenuOpen ? 
                <ul>
                    <li>
                        <Link to="/portfolio/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul> :
                ''}
                </div>
            </div>
        </nav>
    );
};
