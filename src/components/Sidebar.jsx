import React from 'react'
import { BiBookAlt, BiHome,BiMessage,BiSolidReport,BiStats,BiTask,BiGroup,BiTaxi,BiCalendar,BiWrench,BiCog,BiDetail,BiWallet,BiLineChart } from 'react-icons/bi'
import '../styles/sidebar.css';
const Sidebar = () => {
  return (
    <div className='menu'>
        <div className="logo">
           <BiBookAlt/> 
           <h2>HDR Service & Repaire</h2>
        </div>
        <div className="menu-list">
            <a href="#" className="item">
                <BiHome/>
                Dashboard
            </a>
            <a href="#" className="item">
            <BiGroup/>
                Users
            </a>
            <a href="#" className="item">
            <BiCalendar/>
                Appoinments
            </a>
            <a href="#" className="item">
            <BiTaxi/>
                Vehicles
            </a>
            <a href="#" className="item">
            <BiWrench/>
                Services
            </a>
            <a href="#" className="item">
            <BiCog/>
                Repaires
            </a>
            <a href="#" className="item">
            <BiWallet/>
                Payments
            </a>
            <a href="#" className="item">
            <BiDetail/>
                Invoices
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