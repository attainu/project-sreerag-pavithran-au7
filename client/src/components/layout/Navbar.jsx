import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbars">
            <div className="left-nav">
                <Link to="/"><h2>Dev Community</h2></Link>
            </div>
            <div className="right-nav">
                <Link to="/profiles">Developers</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Navbar;
