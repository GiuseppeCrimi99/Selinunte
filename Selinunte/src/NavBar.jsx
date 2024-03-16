import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'
import { faShoppingCart, faGlobe, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NavBar.css"

const NavBar= () => {
  const preHeaderRef = useRef(null);
  const navbarRef = useRef(null);
  const [preHeaderHeight, setPreHeaderHeight] = useState(0);

  useEffect(() => {
    if (preHeaderRef.current && navbarRef.current) {
      setPreHeaderHeight(preHeaderRef.current.offsetHeight);

      const handleScroll = () => {
        if (preHeaderRef.current && navbarRef.current) {
          if (window.scrollY > 0) {
            preHeaderRef.current.classList.add('hide');
            navbarRef.current.style.top = '0';
          } else {
            preHeaderRef.current.classList.remove('hide');
            navbarRef.current.style.top = preHeaderRef.current.offsetHeight + 'px';
          }
        }
      };


      window.addEventListener('scroll', handleScroll);

      return () => {
        // Cleanup event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className='headerContainer'>

      <div ref={preHeaderRef} className='preHeader'>
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: "white" }} />
        <FontAwesomeIcon icon={faGlobe} style={{ color: "white" }} />
        <FontAwesomeIcon icon={faBook} style={{ color: "white" }} />
      </div>

      <header ref={navbarRef} className="header">
        <a href="/" className="logo">
          <img src="src/assets/images/prova-logo1.png" alt="" />
        </a>
        <input className="menu-btn" id="menu-btn" type="checkbox" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Culture</Link>
          </li>
          <li>
            <Link to="/shop">Event</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;

