import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li className=''><i class="bi bi-grid-fill"></i><p>Dashboard</p></li>
            <li className='selected'><i class="bi bi-people-fill"></i><p>Employee</p></li>
            <li><i class="bi bi-calendar-fill"></i><p>Calender</p></li>
            <li><i class="bi bi-chat-square-text-fill"></i><p>Message</p></li>
        </ul>
    </div>
  )
}

export default Sidebar