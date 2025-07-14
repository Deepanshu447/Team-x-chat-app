import React from 'react'
import { Outlet } from "react-router-dom";
import Referencenavbar from '../component2/Referencenavbar';

const Reference = () => {
  return (
    
    <div className='flex'> 
      <Referencenavbar/>
      <div className="right-sidebar flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Reference