import React, { useState, useEffect } from 'react';
import './Main.css';
import Header from './Head/Header';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Project from './Project/Project';
import Acadmeics from './Acadmeics/Acadmeics';
import Contact from './Contact/Contact';
import Skills from './Skill/Skills';

import i5 from './assects/images/html5-logo-31815.png';
import i6 from './assects/images/icons8-css-logo-100.png';
import i7 from './assects/images/icons8-javascript-100.png';
import i8 from './assects/images/icons8-bootstrap-100.png';
import i9 from './assects/images/icons8-react-100.png';
import i10 from './assects/images/icons8-my-sql-100.png';
import i11 from './assects/images/icons8-php-logo-100.png';
import i12 from './assects/images/icons8-c-100 (1).png';
import i13 from './assects/images/icons8-c-plus-100.png';
import i14 from './assects/images/icons8-tailwind-css-100.png';

export default function Main() {
  const [headerColor, setHeaderColor] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      // Define colors for each section
      const sectionStyles = {
        Home: { background: '#000000', text: '#FFFFFF' },
        Skill: { background: '#FFFFFF', text: '#000000' },
        Project: { background: '#000000', text: '#FFFFFF' },
        Acadmecis: { background: '#FFFFFF', text: '#000000' },
        Resume: { background: '#000000', text: '#FFFFFF' },
        Contact: { background: '#FFFFFF', text: '#000000' },
        Footer: { background: '#000000', text: '#FFFFFF' },
      };

      if (currentSection) {
        setHeaderColor(sectionStyles[currentSection].background);
        setTextColor(sectionStyles[currentSection].text);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Main">
      {/* Pass dynamic background and text colors to the Header */}
      <Header headerColor={headerColor} textColor={textColor} />
      <div id="Home" className="section">
        <Home />
      </div>
      <div id="Skill" className="section">
        <Skills
          img1={i5}
          img2={i6}
          img3={i7}
          img4={i8}
          img5={i9}
          img6={i10}
          img7={i11}
          img8={i12}
          img9={i13}
          img10={i14}
        />
      </div>
      <div id="Project" className="section">
        <Project />
      </div>
      <div id="Acadmecis" className="section">
        <Acadmeics />
      </div>

      <div id="Contact" className="section">
        <Contact />
      </div>
      <div id="Footer" className="section">
        <Resume />
      </div>

    </div>
  );
}
