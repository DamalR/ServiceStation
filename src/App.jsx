import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Profile from './components/Profile'
import './App.css'
import Dashboard from './pages/Dashboard'
import Appoinments from './pages/Appoinments'
import Payments from './pages/Payments'
import Reports from './pages/Reports'
import Services from './pages/Services'
import Users from './pages/Users'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Dashboard />
      ),
    },
    {
      path: "appoinments",
      element: <Appoinments />,
    },
    {
      path: "payments",
      element: <Payments />,
    },
    {
      path: "reports",
      element: <Reports />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "users",
      element: <Users />,
    },
  ]);

  return (
 
    <div>
      <div className='nav-bar'>
        <Profile />
      
      <div className='dashboard'>
        <Sidebar />
        <div className="dashboard-content">
        <RouterProvider router={router} />
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default App