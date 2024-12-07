import React from 'react'
import "./Skill.css"

export default function Skills(props) {
  return (
    <div className='container-fluid skill'>
      <div className='row rw3'>
        <h1 className='hea1'> Skills</h1>
      </div>
      <div className='row rw1'>
      <div className='col-3 co1'>
            <div className="skill-item">
            <a href='#Skills' title="HTML 5"><img src={props.img1} alt='HTML 5'/></a><br/>
                <h1>HTML 5</h1>
            </div>
      </div>
        <div className='col-3 co1'>
          <div className="skill-item" >
            <a href='#Skills' title="CSS 3"><img src={props.img2} alt='iyu' /></a><br/>
            <h1>CSS 3</h1>
          </div>
        </div>
        <div className='col-3 co1'>
          <div className="skill-item">
          <a href='#Skills' title="Javascript"><img src={props.img3} alt='iyi'/></a><br/>
            <h1>Javascript </h1>
            </div>
        </div>
        <div className='col-3 co1'>
          <div className="skill-item">
          <a href='#Skills' title="BootStrap"><img src={props.img4} alt='iyr'/></a><br/>
            <h1>Bootstrap </h1>
          </div>
        </div>
      </div>
      <div className='row rw2'>
      <div className='col co2'>
        <div className="skill-item">
        <a href='#Skills' title="TailWind Css"><img src={props.img10} alt='iyn'/></a><br/>
            <h1>TailWind CSS</h1>
          </div>
        </div>
        <div className='col co2'>
          <div className="skill-item">
          <a href='#Skills' title="React Js"><img src={props.img5} alt='iyx'/></a><br/>
            <h1>React js</h1>
          </div>
        </div>
        <div className='col co2'>
          <div className="skill-item">
          <a href='#Skills' title="C Programming"><img src={props.img8} alt='iyk'/></a><br/>
            <h1>C</h1>
            </div>
        </div>
        <div className='col co2'>
          <div className="skill-item">
          <a href='#Skills' title="C++"><img src={props.img9} alt='iya'/></a><br/>
            <h1>C++</h1>
            </div>
        </div>
      </div>
      <div className='row rw2'>
      <div className='col co3'>
      <div className="skill-item">
      <a href='#Skills' title="PHP"><img src={props.img7} alt='iys'/></a><br/>
            <h1>PHP</h1>
            </div>
        </div>
        <div className='col co3'>
        <div className="skill-item">
        <a href='#Skills' title="My SQL"><img src={props.img6} alt='iyr'/></a><br/>
            <h1>MySQl</h1>
          </div>
        </div>
        
      </div>
    </div>
  )
}
