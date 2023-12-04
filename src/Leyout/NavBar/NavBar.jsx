import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <div className='header'>
            <div className="logo">LoGo</div>
            <div className="navBar">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/users'}>Users</Link>
                    </li>
                    <li>
                        <Link to={'/posts'}>Posts</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </>
    );
};

export default NavBar;