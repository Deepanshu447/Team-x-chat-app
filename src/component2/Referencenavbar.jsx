import React from 'react'
import {NavLink} from "react-router-dom";

const Referencenavbar = () => {
    const setactive = ({isActive})=> isActive ? "font-semibold font-bold duration-200 bg-slate-200": "";
  return (
    <div className="left-sidebar">
      <h2 className="text-2xl font-bold mb-2">Reference</h2>
      <nav className="flex flex-col ">
       <NavLink to="." end className={setactive} >Overview</NavLink>
       <NavLink to="hooks"  className={setactive} >Hooks</NavLink>
       <NavLink to="components"  className={setactive} >Components</NavLink>
       <NavLink to="apis"  className={setactive} >APIs</NavLink>
       <NavLink to="servercomponent"  className={setactive} >Server Component</NavLink>
       <NavLink to="clientapi"className={setactive}  >Client Api</NavLink>
       <NavLink to="serverapi" className={setactive} >Server Api</NavLink>
       <NavLink to="staticapi" className={setactive} >Static Api</NavLink>
      </nav>
    </div>
  )
}

export default Referencenavbar