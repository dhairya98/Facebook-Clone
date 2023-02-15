import React from 'react'
import './Sidebar2.css'
import AddBoxIcon from '@mui/icons-material/AddBox';

function Sidebar2() {
  return (
    <div className='sidebar2'>
        <div className="sidebar2__languages">
            <p className="sidebar2__selected">English (UK) .</p>
            <p>English (US) .</p>
            <p>हिंदी .</p>
            <p>اردو .</p>
            <p>తెలుగు .</p>
        </div>
        <div className="sidebar2__policies">
            <p>Privacy .</p>
            <p>Terms .</p>
            <p>Advertising .</p>
            <p>AdChoices .</p>
            <p>Cookies .</p>
            <p>More</p>
        </div>
        <p className="copyright">Facebook © 2023</p>
    </div>
  )
}

export default Sidebar2