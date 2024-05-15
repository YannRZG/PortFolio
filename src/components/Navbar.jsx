import React from 'react';
import { NavLink } from "react-router-dom";
import Darkmode from "./Darkmode";
import LanguageToggle from "./LanguageToggle"; // Importez le composant LanguageToggle
import { useLanguage } from './LanguageContext';
import GithubButton from "./GithubButton"

const Navbar = () => {
    const { toggleLanguage } = useLanguage();

    return (
        <div className="container">
            <h1 className="logo">Y.R.Dev</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                    {/* <li><NavLink to="/project" activeclassname="active">Project</NavLink></li> */}
                    <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                    <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
                    <li><GithubButton /></li>
                    <li><Darkmode /></li>
                    <li><LanguageToggle /></li> {/* Utilisez le composant LanguageToggle ici */}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
