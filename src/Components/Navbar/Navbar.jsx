import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import eco from '../../assets/eco.png';
import head from '../../assets/Universe.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHeroSection(window.scrollY < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="hover-area"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      <nav className={`${isScrolled ? 'navbar scrolled' : 'navbar'} ${!isHeroSection && !isHovered ? 'hidden' : ''}`}>
        <div className='divhead'>
          <img className='leaf' src={eco} alt="" />
          <img className='navhead' src={head} alt="" />
        </div>
        <ul>
          <li><Link to='one' smooth={true} offset={0} duration={500}>Sun</Link></li>
          <li><Link to='two' smooth={true} offset={0} duration={500}>Mercury</Link></li>
          <li><Link to='three' smooth={true} offset={0} duration={500}>Venus</Link></li>
          <li><Link to='four' smooth={true} offset={0} duration={500}>Earth</Link></li>
          <li><Link to='five' smooth={true} offset={0} duration={500}>Mars</Link></li>
          <li><Link to='six' smooth={true} offset={0} duration={500}>Jupiter</Link></li>
          <li><Link to='seven' smooth={true} offset={0} duration={500}>Saturn</Link></li>
          <li><Link to='eight' smooth={true} offset={0} duration={500}>Uranus</Link></li>
          <li><Link to='nine' smooth={true} offset={0} duration={500}>Neptune</Link></li>
          <li><Link to='ten' smooth={true} offset={0} duration={500}>Contact Us</Link></li>
          <li>ⓒ 2023 Solarsystemdesign</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
