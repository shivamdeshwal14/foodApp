import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css'
import useOnlineStatus from '../CustomHooks/useOnlineStatus';
import userContext from '../Utils/userContext';
import { useSelector } from 'react-redux';
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  const cartItems=useSelector((store)=>store.cart.items)
  const user=useSelector((store)=>store.user.userDetails)
  console.log(user);
  
  return (
    <>
      
      <header
        className="flex-col bg-white fixed mt-0 inset-x-0 z-50 py-4 sm:shadow-xl md:px-24 rounded-2xl mx-auto w-full"
        role="banner"
      >
        <div className="flex items-center justify-between p-2">
          <NavLink
            to="/"
            onClick={() => {
              setIsopen(false);
            }}
          >
            <div id="logo-div" className="sm:px-8">
           
              Logo
            </div>
          </NavLink>

          <nav className="space-x-6 hidden sm:flex flex-col sm:flex-row" aria-label="Main Navigation">
            <NavLink to="/" className="hover:cursor-pointer text-xl">
              Home
            </NavLink>
             <NavLink to="/orderHistory" className="hover:cursor-pointer text-xl">
             Orders
            </NavLink>
            
            <NavLink to="/cart" className="hover:cursor-pointer text-xl">
             {cartItems.length +" "}🛒
            </NavLink>
             <NavLink  className="hover:cursor-pointer text-xl">
                 👤 Shivam
            </NavLink>
            <NavLink className="hover:cursor-pointer text-xl" to={"/login"}>
                 Login
             </NavLink>
          </nav>

          <button
            className="sm:hidden text-xl"
            aria-label="Toggle menu"
            aria-expanded={isopen}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            <FaBars />
          </button>
        </div>

        {isopen && (
          <nav
            className="flex flex-col space-y-2 sm:hidden p-4 bg-neutral-50 rounded-2xl flex-wrap"
            aria-label="Mobile Navigation"
          >
            <NavLink
              to="/"
              onClick={() => {
                setIsopen(false);
              }}
              className="hover:cursor-pointer text-xl"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                setIsopen(false);
              }}
              className="hover:cursor-pointer text-xl"
            >
              About Us
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => {
                setIsopen(false);
              }}
              className="hover:cursor-pointer text-xl"
            >
             {cartItems.length} Cart
            </NavLink>

            <NavLink
              
              onClick={() => {
                setIsopen(false);
              }}
              className="hover:cursor-pointer text-xl"
            >
             Logout
            </NavLink>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
