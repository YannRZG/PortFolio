import { NavLink } from "react-router-dom";
import Darkmode from "./Darkmode"

const Navbar = () => (
    <div className="container">
        <h1 className="logo">Logo</h1>
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/project" activeClassName="active">Project</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                <li><Darkmode /></li>
                {/* Ajoutez d'autres liens NavLink ici */}
            </ul>
        </nav>
    </div>
);

export default Navbar;
