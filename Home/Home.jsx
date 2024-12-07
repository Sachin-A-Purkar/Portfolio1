import React from 'react'
import "./Home.css"
import { FaInstagram,FaLinkedin,FaGithub,FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className='ho1'>
      <div className='hb1'>
      <h1 className='t1'>Hello, I'm</h1><br/>
      <h1 className='t2'>Sachin Purkar</h1><br/>
      <h2>A Full Stack Developer</h2><br/>
      <div className='soc'>
      <div className='col'><a href='https://www.linkedin.com/in/sachin-purkar-131566289/'><FaLinkedin style={{color: "#0a66c2",}} className='ic'/></a></div>
      <div className='col'><a href='https://github.com/Sachin-A-Purkar'><FaGithub  className='ic'/></a></div>
      <div className='col'><FaWhatsappSquare style={{color: "#33ff4f",fontSize: "40px"}}/></div>
      <div className='col'><MdEmail style={{color: "#0a66c2",fontSize: "40px"}}/></div>
      <div className='col'><a href='https://www.instagram.com/sachin_.96k._?utm_source=qr'><FaInstagram style={{color: "#ff00a2",fontSize: "40px"}} /></a></div>
      </div>
      <div className='don'>
        <a href='./public/RESUME-4.pdf' download="file.pdf"><div className="btn btn-primary mt-3 w-44 bt">Download Resume</div></a>
        <a href='./public/RESUME-4.pdf' download="file.pdf"><div className="btn btn-primary mt-3 w-44">Download Resume</div></a>
      </div>
      </div>
    </div>
  )
}
