import React from 'react'
import { BiBookAlt, BiHome,BiMessage,BiSolidReport,BiStats,BiTask,BiGroup,BiTaxi,BiCalendar,BiWrench,BiCog,BiDetail,BiWallet,BiLineChart } from 'react-icons/bi'
import '../styles/sidebar.css';
const Sidebar = () => {
  return (
    <div className='menu'>
        <div className="menu-list">
            <a href="#" className="item">
                <BiHome/>
                Dashboard
            </a>
            <a href="#" className="item">
            <BiCalendar/>
                Appoinments
            </a>
            <a href="#" className="item">
            <BiWrench/>
                Services
            </a>
            <a href="#" className="item">
            <BiWallet/>
                Payments
            </a>
            <a href="#" className="item">
            <BiGroup/>
                Users
            </a>
            <a href="#" className="item">
            <BiLineChart/>
                Reports
            </a>
        </div>
    </div>
  )
}

export default Sidebar