import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import LoginHeader from './LoginHeader';
import RegisterHeader from './RegisterHeader'
import Login from './Login';
import Register from './Register';
import HomeHeader from './HomeHeader';
import {auth} from './firebase'
import {useState} from 'react'
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import Posts from './Posts';

function App() {
  const [user,setUser]=useState([])

  auth.onAuthStateChanged((authUser=>{
    if(authUser){
      // console.log('=>',authUser)
      setUser(authUser)
    }
    else{
      // console.log('=>',authUser)
      setUser(false)
    }
  }))
  return (
    <div className="App">
      {/* <LoginHeader /> */}
      <Router>
      {/* <Link to='/login'>Check</Link> */}
        <Routes>
          <Route path='/login' element={
          <>
            <LoginHeader />
            <Login />
          </>
          } />
          <Route path='/register' element={
            <>
              <RegisterHeader />
              <Register />
            </>
          } />
          <Route path='/' element={
            <>
              <HomeHeader user={user}/>
              <div className='bottom'>
                <div className='app__page'>
                  <Sidebar user={user}/>
                </div>
                <div className='app__posts'>
                  <Posts user={user}/>
                </div>
                <Sidebar2 />
              </div>
              
            </>
          }
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
