import React from 'react'
import './LoginHeader.css'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'

function LoginHeader() {
  return (
    <div className='header'>
        {/* <h1>Login Header</h1> */}
        <Link className='link' to='/'><img src='https://i.ibb.co/WzybLQK/del.png' alt='Facebook Logo' className='header__logo'/></Link>
        <Link className='register' to='/register'><button className='header__button'>Create New Account</button></Link>
    </div>
  )
}

export default LoginHeader