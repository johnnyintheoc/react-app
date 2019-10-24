import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
    <div id="nav-wrapper">
        <nav>
            <ul class="main-nav">
                <li><Link style={navStyle} to='/'>Home</Link></li>
                <li><Link style={navStyle} to='/news'>News</Link></li>
                <li><Link style={navStyle} to='/giveaways'>Giveaways</Link></li>
            </ul>
        </nav>
    </div>
    );
}

export default Nav;
