import React from 'react'
import '../css/Help.css'
import avatar from '../public/metrics.png'
const Help = () => {
  return (
   <>
   <div className="help">
    <div className="avatarHelp">
        <img src={avatar.src} alt="" />
    </div>
    <div className="contentHelp">
     <h1>We help you <br /> to <span>grow confidence</span> <br /> at any stage </h1>
     </div>
   </div>
   </>
  )
}

export default Help