import React from 'react'
import './SidebarRow.css'

function SidebarRow({ImageLink, title, selected, avatars}) {
  return (
    <div className={`sidebarRow ${selected && "selected"} ${avatars && "avatars"}`}>
        <div className="colorwrap">
            <img src={ImageLink} alt="" className={`sidebarRow__icon ${avatars && "avatars"}`} />
            <h2 className={`sidebarRow__title ${avatars && "avatars"}`}>{title}</h2>
        </div>
    </div>
  )
}

export default SidebarRow