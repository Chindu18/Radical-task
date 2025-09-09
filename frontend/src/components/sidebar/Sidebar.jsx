import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li className=''><i className="bi bi-grid-fill"></i><p>Dashboard</p></li>
            <li className='selected'><i className="bi bi-people-fill"></i><p>Employee</p></li>
            <li><i className="bi bi-calendar-fill"></i><p>Calender</p></li>
            <li><i className="bi bi-chat-square-text-fill"></i><p>Message</p></li>
        </ul>
    </div>
  )
}

export default Sidebar