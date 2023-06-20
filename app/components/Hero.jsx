import React from 'react'
import avatar from '../public/avatar3.jpg'
import '../css/Hero.css'
const Hero = () => {
  return (
    <div className='heroSection'>
        <div className="content">
            <div className="label1">
              <h4>Mental health at 30's</h4>
              </div>
            <h1>Beat your anxiety with therapy</h1>
            <p>To live your life to the fullest we're <br/> continuing to find ways</p>
            <div className="btns">
              <button className='helpBtn'>Get Help <span>&gt;</span></button>
              <div className="pla">
                <div className="playBtn">
                  <div className="playBox"> <div class="play"></div></div>
               
                <p>Play Reviews</p>
                </div>

              </div>
            </div>
        </div>
        <div className="avatar">
            <img src={avatar.src} alt="Not found" />
        </div>
        
    </div>
  )
}

export default Hero