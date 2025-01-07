import React, { useState, useRef, useEffect  } from 'react';
import "./NavBar.css";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const checkboxRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const sections = useRef([]);


  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
    checkboxRef.current.checked = false;
  };

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects'];
    sections.current = sectionIds.map(id => document.getElementById(id));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections.current) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (id) => id === activeSection;

  return (
    <nav className='nav'>
      <div className='nav__menu'>
        <input type="checkbox" id="touch" ref={checkboxRef} />
        <label className="dropdown" htmlFor="touch" onClick={toggleHamburger}></label>
        <ul className='nav__list tab'>
          <li className={`nav__item item-1 ${isActive('about') ? 'active' : ''}`}>
            <a href="#about" className="nav__text" onClick={closeMenu}>
              <span>About me</span>
            </a>
          </li>
          <li className={`nav__item item-2 ${isActive('experience') ? 'active' : ''}`}>
            <a href="#experience" className="nav__text" onClick={closeMenu}>
            <span>Experience</span>
            </a>
          </li>
          <li className={`nav__item item-3 last ${isActive('projects') ? 'active' : ''}`}>
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