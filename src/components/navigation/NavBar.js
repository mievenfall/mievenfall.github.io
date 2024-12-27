import React, { useState, useRef } from 'react';
import "./NavBar.css";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const checkboxRef = useRef(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
    checkboxRef.current.checked = false;
  };

  return (
    <nav className='nav'>
      <div className='nav__menu'>
        <input type="checkbox" id="touch" ref={checkboxRef} />
        <label className="dropdown" htmlFor="touch" onClick={toggleHamburger}></label>
        <ul className='nav__list tab'>
          <li className="nav__item item-1">
            <a href="#about" className="nav__text" onClick={closeMenu}>
              <span>About me</span>
            </a>
          </li>
          <li className="nav__item item-2">
            <a href="#experience" className="nav__text" onClick={closeMenu}>
            <span>Experience</span>
            </a>
          </li>
          <li className="nav__item item-3 last">
            <a href="#projects" className="nav__text" onClick={closeMenu}>
            <span>Projects</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;