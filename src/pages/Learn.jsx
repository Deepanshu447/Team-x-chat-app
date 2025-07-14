import React from 'react'
import { Outlet } from "react-router-dom";
import Learnsidenav from '../components/Learnsidenav';


const Learn = () => {
  return (
     
      <div className='flex'> 
      <Learnsidenav/>
      <div className="right-sidebar flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Learn