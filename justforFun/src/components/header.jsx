import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <h1 className='bg-red-800 text-white flex justify-around p-4 text-3xl'>Router + Context</h1>
    <div className="bg-gray-800 text-white flex justify-around p-4">
      <NavLink to="" className={({isActive})=>
            `${isActive?"text-orange-600":"text-white"} hover:bg-gray-700 px-4 py-2 rounded`
        }>
        Home
      </NavLink>
      <NavLink to="/Login" 
          className={({isActive})=>
            `${isActive?"text-orange-600":"text-white"} hover:bg-gray-700 px-4 py-2 rounded`
        }
      >
        Login
      </NavLink>
      <NavLink to="/Profile" className={({isActive})=>
            `${isActive?"text-orange-600":"text-white"} hover:bg-gray-700 px-4 py-2 rounded`
        }>
        Profile
      </NavLink>
      <NavLink to="/Contact" className={({isActive})=>
            `${isActive?"text-orange-600":"text-white"} hover:bg-gray-700 px-4 py-2 rounded`
        }>
        Contact
      </NavLink>
    </div>
    </div>
  );
};

export default Header;
