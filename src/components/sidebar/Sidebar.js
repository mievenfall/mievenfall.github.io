import React from 'react';
import "./Sidebar.css";
import Me from "../../assets/img/profile-pic.jpg"
import "../../assets/css/simple-line-icons.css"

const Sidebar = () => {
    return (
        <aside className='aside'>
            {/* <a href="#about" className="nav__text">
                About
            </a> */}
            <div className="info container">
                <div className="info">
                    <img src={Me} alt="" className="info__img" />
                    <h1>Evelyn Vu</h1>
                    <div>she/hers</div>
                </div>
            </div>
            <div className="contact container">
                <span class="icon-social-github"></span>
                <span class="icon-social-linkedin"></span>
                <span class="icon-social-twitter"></span>
                <span class="icon-envelope"></span>
                    
            </div>
            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        <li className="nav__item">
                            <a href="#about" className="nav__text">About</a> 
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__text">Experience</a> 
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__text">Projects</a> 
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar