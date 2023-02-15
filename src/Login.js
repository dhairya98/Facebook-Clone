import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Login.css'
import { auth } from './firebase';

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const nav=useNavigate()
    const login=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth)
            nav('/')})
            .catch(()=>alert('Invalid Credentials'))
    }
  return (
    <div className='login'>
        <div className='login__container'>
            <h3>Log in to Facebook</h3>
            <form>
                <center>
                    <input type='text' placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
                </center>
                <center>
                    <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                </center>
                <center>
                    <button type='submit' onClick={login} className='login__login'>Log In</button>
                </center>
                <center>
                    <h6>Forgotten Password</h6>
                </center>
                <center>
                    <hr />
                </center>
                <center>
                    <Link to ='/register'>
                        <button className='login__createNewAccount'>Create New Account</button>    
                    </Link>    
                </center>


            </form>
        </div>
    </div>
  )
}

export default Login