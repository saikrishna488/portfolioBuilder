"use client";
import React from 'react';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';

const Resume = () => {
    const leftArrow = () => {
        let left = document.getElementsByClassName('holder-resume')[0];
        left.scrollBy(-360,0);
    }

    const rightArrow = () => {
        let right = document.getElementsByClassName('holder-resume')[0];
        right.scrollBy(360,0);
    }
  return (
    <div className='resume'>
      <h4 style={{color:'white'}}>Resume (choose templates)</h4>
      <span className='left-arrow' onClick={leftArrow}><BsFillArrowLeftCircleFill size={40} /></span>
      <span className='right-arrow' onClick={rightArrow}><BsFillArrowRightCircleFill size={40}/></span>
      <div className='holder-resume'>
        <div className="resume-card">
            <img src="https://gdoc.io/uploads/University-Student-Resume-Template-web1.jpg" alt="" />
        </div>
        <div className="resume-card">
            <img src="https://cdn-images.zety.com/templates/zety/cascade-3-duo-blue-navy-21@3x.png" alt="" />
        </div>
        <div className="resume-card">
            <img src="https://gdoc.io/uploads/University-Student-Resume-Template-web1.jpg" alt="" />
        </div>
        <div className="resume-card">
            <img src="https://cdn-images.zety.com/templates/zety/cascade-3-duo-blue-navy-21@3x.png" alt="" />
        </div>
        <div className="resume-card">
            <img src="https://gdoc.io/uploads/University-Student-Resume-Template-web1.jpg" alt="" />
        </div>
        <div className="resume-card">
            <img src="https://cdn-images.zety.com/templates/zety/cascade-3-duo-blue-navy-21@3x.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Resume
