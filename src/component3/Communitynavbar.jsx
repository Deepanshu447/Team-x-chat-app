import React from 'react';
import { NavLink } from "react-router-dom";

const Communitynavbar = () => {

    const setactive = ({isActive})=> isActive ? "font-semibold font-bold duration-200 bg-slate-200":"";

  return (
    <div className="left-sidebar">
      <h2 className="text-2xl font-bold mb-2">Community</h2>
      <nav className="flex flex-col">
       <NavLink to="." end  className={setactive}>Community</NavLink>
       <NavLink to="conferences"  className={setactive} >React Conferences</NavLink>
       <NavLink to="meetups"  className={setactive} >React Meetups</NavLink>
       <NavLink to="videos"  className={setactive} >React Videos</NavLink>
       <NavLink to="team"  className={setactive} >Meet The Team</NavLink>
       <NavLink to="docs-contributors"  className={setactive} >Docs Contributors</NavLink>
       <NavLink to="translations"  className={setactive} >Translations</NavLink>
       <NavLink to="acknowledgements"  className={setactive} >Acknowledgements</NavLink>
       <NavLink to="versioning-policy" className={setactive}  >Versioning Policy</NavLink>
      </nav>
    </div>
  )
}

export default Communitynavbar