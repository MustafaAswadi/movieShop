import React from 'react';
import { Link, NavLink } from 'react-router-dom';


interface NavbarProps {
    
}
 
class Navbar extends React.Component<NavbarProps> {
    render() { 
        return (  
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link className="navbar-brand" to="/">Vidly</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customers">Customers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rentals">Rentals</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;