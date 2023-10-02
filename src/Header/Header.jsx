import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {



  return (
    <div>
      <div  >
        <nav>
          <ul className='flex justify-between items-center py-6 shadow-xl ' >
            <li>
              <NavLink to='/'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-700-600 underline" : ""} >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to='/product'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-700-600 underline" : ""} >
                Product
              </NavLink>
            </li>

            <li>
              <NavLink to='/productdetails'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-700-600 underline" : ""} >
                Product Details
              </NavLink>
            </li>

            <li>
              <NavLink to='/login'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-700-600 underline" : ""} >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to='/productdetails'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-700-600 underline" : ""}>
                Messages
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default Header;