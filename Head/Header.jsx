import React from 'react';
import './Header.css';

export default function Header({ headerColor, textColor }) {
  return (
    <header
      style={{
        backgroundColor: headerColor,
        transition: 'background-color 0.3s ease, color 0.3s ease', // Added transition for text color change
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        lineHeight: '60px',
        textAlign: 'center',
        zIndex: 10,
        color: textColor, 
      }}
    >
      <div className="hmain">
        <div className="h1"></div>
        <div className="row h2">
          <div className="col hc1">
            <a className="lin" href="#Home" style={{ color: textColor }}>
              Intro
            </a>
          </div>
          <div className="col hc1">
            <a className="lin" href="#Skill" style={{ color: textColor }}>
              Skills
            </a>
          </div>
          <div className="col hc1">
            <a className="lin" href="#Project" style={{ color: textColor }}>
              Project
            </a>
          </div>
          <div className="col hc1">
            <a className="lin" href="#Acadmecis" style={{ color: textColor }}>
              Academics
            </a>
          </div>
          <div className="col hc1">
            <a className="lin" href="#Contact" style={{ color: textColor }}>
              Contact
            </a>
          </div>
        </div>
        <div className="h1"></div>
      </div>
    </header>
  );
}
