import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { BiHomeSmile, BiStore, BiCartAlt } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import myGlobalContext from "../context";
import { useNavigate } from "react-router-dom";
// import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const {
    page,
    setRunme,
    setCartOpen,
    totalQty,
    search,
    handleSearchInputChange,
    handleSearch,
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

  // console.log(visible1, 1);
  // console.log(visible2, 2);

  return (
    <>
      {page !== "Signup" && page !== "Login" && (
        <div
          className={`${
            page === "adminDashboard" ? "w-full" : "w-full fixed top-0 z-[999]"
          } `}
        >
          <div className="border-b-[1px] border-gray-800 bg-[#222222] text-zinc-200 flex-col p-4 justify-between text-[12px] lg:text-[16px] md:py-2 md:px-10 md:flex md:flex-row">
            <div></div>
            <div className="md:flex md:space-x-4">
              <p>
                Hotline: <a href="tel:+2347033251356">+2347033251356</a>
              </p>
              <div>English</div>
              <div>NGN </div>
            </div>
          </div>

          <div className="py-4 px-4 md:px-10 md:py-4 bg-[#222222] lg:flex lg:items-center lg:justify-between  ">
            <div className="flex lg:gap-10 lg:items-center w-full lg:w-[70%] justify-between">
              <div className="lg:flex lg:w-full lg:items-center lg:gap-4 lg:text-[24px] lg:font-bold">
                <img
                  src="/myImages/Mask group (2).png"
                  alt="Logo"
                  className="h-10 w-10 lg:h-12 lg:w-12"
                />
                <p className="text-white hidden lg:flex">Perfect Computers</p>
              </div>

              {/* mobile */}
              <div
                className="flex items-center space-x-2 cursor-pointer lg:hidden"
                onClick={() => {
                  page === "home" ? setCartOpen(true) : setCartOpen(false);
                  setRunme((prev) => !prev);
                }}
              >
                <BiCartAlt className="text-white " size={25} />
                <div className="hover:text-indigo-400">
                  <p className="text-zinc-800 bg-white rounded-full text-center">
                    {totalQty}
                  </p>
                  <p className="text-white font-semibold">Cart</p>
                </div>
              </div>

              {/* big screen */}
              <div class="mt-3  lg:flex rounded justify-center items-center  border border-white overflow-hidden hidden lg:w-full">
                <input
                  placeholder="Search computers"
                  value={search}
                  onChange={handleSearchInputChange}
                  class="py-[5px] rounded outline-none px-4 bg-[#222222] text-white  md:w-[100vw]"
                />
              </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between space-x-6">
              <div class="mt-3 w-[70vw] flex lg:hidden rounded justify-between lg:mt-0 md:w-[30vw] md:min-w-[400px] border border-white overflow-hidden">
                <input
                  placeholder="Search computers"
                  value={search}
                  onChange={handleSearchInputChange}
                  class="py-[5px] rounded outline-none px-4 bg-[#222222] text-white  md:w-[33vw]"
                />
              </div>

              <div>
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
            </div>

            {/* ${visible} */}
            <div
              className={`${
                visible === "hidden"
                  ? ` h-0 overflow-hidden`
                  : `h-22  overflow-hidden`
              }   text-white text-sm mt-6 lg:mt-0 lg:ml-16 lg:h-[unset] duration-500 `}
            >
              <nav>
                <ul className="flex lg:gap-10">
                  <li className=" md:inline mt-2 lg:mt-0 ">
                    <Link to="/">
                      <div
                        className={` ${
                          page === "home"
                            ? "bg-[#1b3a559f] p-2 rounded w-full"
                            : "text-white"
                        } flex items-center space-x-2 mt-2`}
                      >
                        <BiHomeSmile className="text-white" size={25} />
                        <p className="hover:text-indigo-400">Home</p>
                      </div>
                    </Link>
                  </li>
                  <li className="hidden md:flex mt-2 lg:mt-0 ">
                    <div
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => {
                        page === "home"
                          ? setCartOpen(true)
                          : setCartOpen(false);
                        setRunme((prev) => !prev);
                      }}
                    >
                      <BiCartAlt className="text-white " size={25} />
                      <div className="hover:text-indigo-400">
                        <p className="text-zinc-800 bg-white rounded-full text-center">
                          {totalQty}
                        </p>
                        <p>Cart</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Header;
