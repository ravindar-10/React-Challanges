import React from 'react';
import './navbar.css';
// import '../index.css';
function NavBar(props){
    return (
        <div className="nav">
            <div className="search-container">
            <input/>
            <button className='search-btn' >Search</button>
            </div>
        </div>
           )
    }
export default NavBar;