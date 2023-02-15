// import React from 'react'
import React, { useState } from 'react'
import './Register.css'
import {auth} from './firebase'
import {useNavigate} from 'react-router-dom'


function Register() {
    const [days,setDate]=useState([])
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const nav=useNavigate()
    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth.user){
                auth.user.updateProfile({displayName:firstName+' '+lastName}).then((s)=>{nav('/')})
            }
        }).catch(err=>console.log(err))
    }
    for(var i=1;i<=31;i++){
        days.push(i)
    }
    // console.log(days)
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    // console.log(months)
    const years=[]
    for(var i=2023;i>=1920;i--){
        years.push(i)
    }
    // console.log(years)
    
  return (
    <div className='registers'>
        <div className="register__container">
            <h1>Create a New Account</h1>
            <h3>It's quick & Easy!</h3>
            <form>
                <center className='inputs'>
                    <input type='name' className='register__firstname' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
                    <input type='name' className='register__lastname' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}/>
                </center>
                <center className='email'>
                    <input type='name' className='register__email' placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)}/>
                </center>
                <center className='password'>
                    <input type='password' className='register__password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                </center>
                <h5 className='register__date'>Date of Birth</h5>
                {/* <label for="day">Day:</label> */}
                <div className="dates">
                    <select id="day" name="day" className='register__date2'>
                        {days.map(item=><option value='Day'>{item}</option>)}
                    </select>
                    {/* <label for="month">Month:</label> */}
                    <select id="month" name="month" className='register__date3'>
                        {months.map(item=><option value={item}>{item}</option>)}
                    </select>
                    {/* <label for="year">Year:</label> */}
                    <select id="year" name="year" className='register__date3'>
                        {years.map(item=><option value={item}>{item}</option>)}
                    </select>
                </div>
                
                <h5 className='register__gender'>Gender</h5>
                <div className="register__radiocontainer">
                    <div className="gender">
                        <input type='radio' name='gender' value='Male' />
                        <label>Male</label>
                    </div>
                    <div className="gender">
                        <input type='radio' name='gender' value='Female' />
                        <label>Female</label>
                    </div>
                    <div className="gender">
                        <input type='radio' name='gender' value='Other' />
                        <label>Other</label>
                    </div>
                </div>
                <p className="register__policy">
                    By clicking Sign Up, you agree to our{" "}
                    <span>Terms, Data & Policy</span> and <span>Cookie Policy</span>. You may receive SMS notifications from us and can opt out at any time.
                </p>
                <center>
                    <button className="register__register" onClick={register}>Sign Up!</button>
                </center>
            </form>
        </div>
    </div>
  )
}

export default Register