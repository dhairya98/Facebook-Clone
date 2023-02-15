import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar({user}) {
  return (
    <div className='sidebar'>
        <SidebarRow avatars ImageLink="https://cdn-icons-png.flaticon.com/512/924/924874.png" title={user?.displayName}/>
        <SidebarRow selected ImageLink="https://cdn-icons-png.flaticon.com/512/1946/1946419.png" title="News Feed"/>
        <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/889/889101.png" title="Messenger"/>
        <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/4406/4406124.png" title="Watch"/>
        <h3>Explore</h3>
        <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/733/733547.png" title="Welcome"/>
        <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/2913/2913584.png" title="COVID-19 Information"/>
        <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/699/699931.png" title="Pages"/>
        <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/2413/2413035.png" title="Events"/>
        <SidebarRow ImageLink="https://cdn-icons-png.flaticon.com/512/4144/4144517.png" title="Groups"/>
    </div>
  )
}

export default Sidebar