import './RegisterHeader.css'

import React from 'react'
import { Link } from 'react-router-dom'

function RegisterHeader() {
  return (
    <div className='registerheader'>
        {/* <div className="header__left"> */}
        <Link to='/'><img src='https://i.ibb.co/WzybLQK/del.png' className='header__logos'/></Link>
        {/* </div> */}
        <div className="header__right">
            <div className="login__form">
                <input type='email' placeholder='E-Mail' />
                <input type='password' placeholder='Password'/>
                <button type='submit' className='register__button'>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default RegisterHeader