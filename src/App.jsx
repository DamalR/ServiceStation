import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Profile from './components/Profile'
import './App.css'

const App = () => {
  return (
    <div>
      <div className='nav-bar'>
        <Profile />
      
      <div className='dashboard'>
        <Sidebar />
        <div className="dashboard-content">
          <Content />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App