import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { BiHomeSmile, BiStore, BiCartAlt } from "react-icons/bi";
import { RiDashboard2Line } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import * as Icons from "@heroicons/react/24/outline";
import myGlobalContext from "../context";

// import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const {
    page,
    setRunme,
    setCartOpen,
    totalQty,
  } = useContext(myGlobalContext);


  const [visible, setVisible] = useState("hidden");
  const [visible1, setVisible1] = useState("");
  const [visible2, setVisible2] = useState("hidden");

  const toggleMenu = () => {
    // visible === "hidden" ? setVisible("") : setVisible("hidden");
    if (visible === "hidden") {
      setVisible("");
      setVisible1("hidden");
      setVisible2("");
    } else {
      setVisible("hidden");
      setVisible1("");
      setVisible2("hidden");
    }
  };
  console.log(visible1, 1);
  console.log(visible2, 2);
  return (
    <div className={`${page === "adminDashboard"? "w-full z-20":"w-full fixed z-20"} `}>
      <div className="border-b-[1px] border-gray-800 bg-[#10181f] text-zinc-200 flex-col p-4 justify-between text-[12px] md:py-2 md:px-20 md:flex md:flex-row">
        <div>
          <p>Free Shipping Over $100 & Free Returns</p>
        </div>
        <div className="md:flex md:space-x-2">
          <p>
            Hotline: <a href="tel:+2349091793058">+2349091793058</a>
          </p>
          <div>English</div>
          <div>USD $</div>
        </div>
      </div>
      <div className="py-4 px-4 md:px-20 md:py-4 bg-[rgb(16,24,31)] lg:flex lg:items-center lg:justify-between">
      <Icons.UserCircleIcon className="h-10 w-10 text-white" />
        <div className="flex items-center justify-between space-x-6 my-3">
{
  page !== "adminDashboard"  &&      <div className=" w-[70vw] flex rounded bg-white overflow-hidden justify-between  md:w-[25vw] md:min-w-[300px] ">
  <input
    placeholder="Search me"
    className="py-[5px] rounded outline-none px-6 text-zinc-500 w-[60vw] md:w-[33vw]"
  />
  <div className="bg-yellow-500 flex items-center justify-center w-[50px] cursor-pointer">
    <Icons.MagnifyingGlassIcon className="h-5 w-5 text-white" />
  </div>
</div>
}

          <CgMenuLeft
            size={23}
            className={`${visible1} lg:hidden text-white`}
            onClick={toggleMenu}
          />
          <MdOutlineClose
            size={23}
            className={`${visible2} lg:hidden text-white`}
            onClick={toggleMenu}
          />
        </div>
        {/* ${visible} */}
        <nav
          className={`${
            visible === "hidden"
              ? ` h-0 overflow-hidden`
              : `h-22 overflow-hidden`
          } lg:block  text-white text-sm mt-6 lg:mt-0 lg:ml-16 lg:h-[unset]  duration-500`}
        >
          <ul className="flex flex-wrap items-center justify-between
         ">
            <li className=" md:inline mr-6 mt-2 lg:mt-0 ">
              <Link to="/">
             
                 <div className={` ${page === "home"? "bg-[#1b3a559f] p-2 rounded":"text-white"} flex items-center space-x-2 mt-2 hover:text-indigo-400`}>
                 <BiHomeSmile className="text-white" size={25} />
                 <div>
                   <p>Home</p>
                 </div>
               </div>
             
              </Link>
            </li>
            <li className=" md:inline mr-6 mt-2 lg:mt-0 hover:text-indigo-400">
              <Link to="/AdminDashboard">
                <div className={`${page === "adminDashboard"? "bg-[#1b3a559f] p-2 rounded":"text-white"} flex items-center space-x-2 mt-2`}>
                  <RiDashboard2Line className="text-white" size={25} />
                  <div>
                    <p>Dashboard</p>
                  </div>
                </div>
              </Link>
            </li>

            <li className=" hover:text-indigo-400 md:inline mr-6 mt-2 lg:mt-0 ">
              <Link to="/Store">
                <div className={`${page === "store"? "bg-[#1b3a559f] p-2 rounded":"text-white"} flex items-center space-x-2 mt-2`}>
                  <BiStore className="text-white" size={25} />
                  <div>
                    <p>Store</p>
                  </div>
                </div>
              </Link>
            </li>
            <li className=" hover:text-indigo-400 md:inline mr-4 mt-2 lg:mt-0 ">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => {
                  page === "store"? setCartOpen(true):setCartOpen(false);
                  setRunme((prev) => !prev);
                }}
              >
                <BiCartAlt className="text-white" size={25} />
                <div>
                  <p className="text-zinc-800 bg-white rounded-full text-center">
                    {totalQty}
                  </p>
                  <p>$0.00</p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
