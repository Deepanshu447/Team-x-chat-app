import React from "react";
import { NavLink } from "react-router-dom";

const Learnsidenav = () => {
    const setactive = ({isActive})=> isActive ? "font-semibold font-bold duration-200 bg-slate-200": "";

  return (
     <div className="left-sidebar">
      <h2 className="text-2xl font-bold mb-2 ">Learn</h2>
      <nav className="flex flex-col ">
       <NavLink to="." end className={setactive}>Quickstart</NavLink>
       <NavLink to="tictactoe" className={setactive}  >Tic Tac Toe</NavLink>
       <NavLink to="installation"  className={setactive} >Installation</NavLink>
       <NavLink to="setup" className={setactive} >Setup</NavLink>
       <NavLink to="describing-ui"  className={setactive} >Describing UI</NavLink>
       <NavLink to="adding-interactivity"  className={setactive} >Adding Interactivity</NavLink>
      </nav>
    </div>
  )
}

export default Learnsidenav