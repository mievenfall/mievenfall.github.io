import React, { useState } from 'react';
import "./Sidebar.css";
import Me from "../../assets/img/profile-pic.jpeg"
import "../../assets/css/simple-line-icons.css"

const Sidebar = () => {

    return (
        <aside className='aside'>
            {/* <a href="#about" className="nav__text">
                About
            </a> */}
            <div className="info-container">
                <div className="info">
                    <div className="img-container">
                        <img src={Me} alt="" className="info__img" />
                    </div>
                    <div className="name">
                        <h1 style={{color: "var(--purple-color)"}}>Evelyn Vu</h1>
                        {/* <div>evelyn.mnvu [at] gmail [dot] com</div> */}
                    </div>
                </div>
            </div>
            <div className="contact">
                <a href="https://github.com/mievenfall" target='blank'><span class="icon-social-github"></span></a>
                <a href="https://www.linkedin.com/in/evelynvu" target='blank'><span class="icon-social-linkedin"></span></a>
                <a href="https://x.com/mievenfall" target='blank'><span class="icon-social-twitter"></span></a>
                <a href="mailto:evelyn.mnvu@gmail.com" target='blank'><span class="icon-envelope"></span></a>             
                    
            </div>

            <button className="resume-container btn-5">
                <a href="https://drive.google.com/file/d/1PH7c53mNlD4IZV5IoKmWJ-i4TyquKIot/view?usp=sharing" target="_blank">
                    <span className="resume">my resume</span>
                </a>
            </button>
        </aside>
    )
}

export default Sidebar