import React from 'react'
import { Outlet } from 'react-router-dom'
import Communitynavbar from '../component3/Communitynavbar'

const Community = () => {
  return (
    <div className='flex'>
        <Communitynavbar/>
        <div className="right-sidebar flex-1">
            <Outlet/>
        </div>
    </div>
  )
}

export default Community
