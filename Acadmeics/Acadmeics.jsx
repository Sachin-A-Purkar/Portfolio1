import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";




import "./Acadmeics.css";

export default function Acadmeics() {
  return (
    <div className='ac12'>
      <div className='row acrow1'><h1 style={{fontSize:"40px"}}> Qualifiaction</h1></div>
      <div className='row acrow2'>
        <div className='col-3 card'>
          <h1 style={{fontSize:"30px",color:"white"}}><FaGraduationCap />B.Sc. Computer Science</h1>
          <h3 className="text" style={{fontSize:"14px"}}>(2021-2024)</h3><br/>
          <h3 className="text"><span>Institute :</span> K.T.H.M College,Nashik.</h3><br/>
          <p className="text">
          Graduated with Average C.G.P.A of 6.98  ( First Class).
          </p>
          <a href='https://kthmcollege.ac.in/'>
            <button className="btn btn-primary mt-3 w-34">
            Visit Website
            </button>
          </a>
        </div>
        <div className='col-3 card'>
        <h1 style={{fontSize:"30px",color:"white"}}><FaGraduationCap />12th (science)</h1>
          <h3 className="text" style={{fontSize:"14px"}}>(2019-2021)</h3><br/>
          <h3 className="text"><span>Institute :</span> BOY’S TOWN JR COLLEGE ,Nashik.</h3><br/>
          <p className="text">
          Obtained an impressive score of 72.50% in 12th standard examinations.
          </p>
          <a href='https://boystown.in/app2014/'>
            <button className="btn btn-primary mt-3 w-34">
            Visit Website
            </button>
          </a>
        </div>
        <div className='col-3 card'>
        <h1 style={{fontSize:"30px",color:"white"}}><FaGraduationCap />10th Boards</h1>
          <h3 className="text" style={{fontSize:"14px"}}>(2018-2019)</h3><br/>
          <h3 className="text"><span>Institute :</span> SARASWATI VIDYALAYA ,Nashik.</h3><br/>
          <p className="text">
          Obtained an impressive score of 76.80% in 10th standard examinations.
          </p>
          <a href='#home'>
            <button className="btn btn-primary mt-3 w-34">
            Visit Website
            </button>
          </a>
        </div>
        
      </div>
    </div>
  )
}
