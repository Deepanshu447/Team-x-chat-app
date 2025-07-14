import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const getLinkClasses = ({ isActive }) =>
        isActive ? " font-semibold font-bold duration-200": "";

    return (
        <header className="bg-blue-600 shadow-md header-top">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
                <div className="text-2xl font-bold">
                    <NavLink to="/">
                        React
                    </NavLink>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <NavLink to="/learn" className={getLinkClasses}>
                            Learn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reference" className={getLinkClasses}>
                            Reference
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/community" className={getLinkClasses}>
                            Community
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={getLinkClasses}>
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
