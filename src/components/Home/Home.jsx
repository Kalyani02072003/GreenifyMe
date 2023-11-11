import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faUser } from '@fortawesome/fontawesome-free-solid'
import './home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-container">
        <div className="bg"></div>
        <div className="content-container">
            <div className="navbar">
                <div className="brand">GreenifyMe</div>
                <div className="links">
                    {/* <a href="#blogs">Blogs</a>
                    <a href="#explore">Explore</a>
                    // <a href="#login">Login</a> */}
                    {/* // <Link to="/blogs">Blogs</Link>
                    // <Link to="/explore">Explore</Link> */}
                    <FontAwesomeIcon className='login-icon' icon={faUser} bounce />
                    <Link to="/login">LOGIN</Link>
                </div>
            </div>
            {/* <div className="main-content">
                <h1 className="main-title">Feel the Nature</h1>
                <p className="sub-title">CHOOSE WHAT'S BEST FOR YOU</p>
            </div>
             */}
            </div>
        <div className="footer-content">
            Made with <FontAwesomeIcon icon={faHeart} bounce
            style={{color: '#f02c0a',}} /> by Kalyani
        </div>
    </div>
   
  )
}

export default Home