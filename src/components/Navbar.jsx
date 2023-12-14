import React, { useState } from "react";
import { IoSearchOutline,IoClose  } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GiShoppingBag } from "react-icons/gi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const[isMenuOpen,setIsMenuOpen]=useState(false)
  const toogleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    {
      title: "Jewelry & Accessories",
      path: "/",
    },
    {
      title: "Clothing & Shoes",
      path: "/",
    },
    {
      title: "Home & Living",
      path: "/",
    },
    {
      title: "Wedding & Party",
      path: "/",
    },
    {
      title: "Toys & Entertainment",
      path: "/",
    },
    {
      title: "Art & Collectibles",
      path: "/",
    },
    {
      title: "Craft Supplies & Tools",
      path: "/",
    },
  ];
  return (
    <header className=" max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className=" flex justify-between items-center container md:py-4 pt-6 pb-3">
        <IoSearchOutline size={25} className=" text-Black cursor-pointer hidden md:block" />

        {/* logo section */}
        <a href="/" className="sm: ml-2 ">
          <img src={logo} alt="logo " className=" w-[100px] h[100px" />
        </a>

        {/* account and user btn */}
        <div className=" text-lg text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className=" flex items-center gap-2">
            <VscAccount /> Account
          </a>
          <a href="/" className=" flex items-center gap-2">
            <GiShoppingBag />
            Shooping
          </a>
        </div>
        {/* navbar for mobile  */}
        <div className=" sm:hidden">
            <button onClick={toogleMenu}>
                {isMenuOpen?<IoClose size={25} className=" text-pink-600"/> : <HiOutlineMenuAlt3 size={25} className=" text-pink-600"/>}
            </button>
              
        </div>
      </nav>

      <hr />
      {/* categories item */}
      <div className=" pt-4">
        <ul className=" lg:flex justify-between text-Black hidden ">
            {navItems.map(({title,path})=>(
                <li key={title} >
                    <Link to="/" className=" hover:text-orange-500">{title}</Link>
                </li>
            ))}
        </ul>
      </div>

      {/* mobile menu lists */}
      <div>
        <ul className={` bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" :"hidden"}`}>
            {navItems.map(({title,path})=>(
                <li key={title} className=" hover:text-orange-500">
                     <Link to="/">{title}</Link>
                </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
