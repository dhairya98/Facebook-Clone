import React from 'react'
import './HomeHeader.css'
import {Link,useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TelegramIcon from '@mui/icons-material/Telegram';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {auth} from './firebase'

function HomeHeader({user}) {
    const nav=useNavigate()
    if(user===false){
        nav('/login')
    }
    const logout=(e)=>{
        e.preventDefault();
        auth.signOut();
        nav('/login')
    }
  return (
    <div className='homeHeader'>
        <div className="homeHeader__left">
            <Link to ='/'>
                <img src='https://www.transparentpng.com/thumb/facebook-logo/facebook-logo-hd-png-4.png' alt='facebook logo' className='homeHeader__logo'/>
            </Link>
        </div>
        <div className="homeHeader__inputSearch">
            <input type='text' placeholder='Search'/>
            <SearchIcon className='homeHeader__inputButton' />
        </div>
        <div className="homeHeader__icons">
            <section className='avatar'>
                <PersonOutlineIcon className='homeHeader__avatar' alt='' src=''/><h3 className="homeHeader__name">Welcome, {user?.displayName}</h3>
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <h3 className="homeHeader__name">Home</h3>
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <h3 className="homeHeader__name">Find Friends</h3>
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <h3 className="homeHeader__name">Create</h3>
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <GroupAddIcon className='homeHeader__avatar' />
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <TelegramIcon className='homeHeader__avatar' />
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <NotificationsNoneIcon className='homeHeader__avatar' />
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <AssignmentIndIcon className='homeHeader__avatar' />
            </section>
            <h3 className="homeHeader__dash"> | </h3>
            <section>
                <div className="dropdown">
                    <ArrowDropDownIcon className='dropdown__arrow' />
                    <div className="dropdown-content">
                        <a onClick={(e)=>logout(e)}><p className='logout__heading'>LogOut</p></a>
                    </div>
                </div>
            </section>
            <h3 className="homeHeader__dash"> | </h3>
        </div>
    </div>
  )
}

export default HomeHeader