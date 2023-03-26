import React, { useCallback, useContext, useEffect, useState } from "react";
import { FiMinimize2 } from "react-icons/fi";
import myGlobalContext from "../context";
const SideMenu = () => {


  const {
    setComponentName,componentName
  } = useContext(myGlobalContext);

  const [openSideMenu, setOpenSideMenu, ] = useState(false);
  const [createBlogFunction, setCreateBlogFunction, ] = useState(true);
  const [editBlogFunction, setEditBlogFunction, ] = useState(true);

  const toggleSideMenuHandle = () => {
    setOpenSideMenu((prev) => !prev);
  };

  const createBlog=useCallback(
    ()=>{
      setComponentName("addPost")
    },[setComponentName]
  )
  useEffect(()=>{
    createBlog()
  },[createBlogFunction, createBlog])

  const editBlog=useCallback(
    ()=>{
      setComponentName("editPost")
    },[setComponentName]
  )
  useEffect(()=>{
    editBlog()
  },[editBlogFunction, editBlog])

  return (
    <div      className={`${
      openSideMenu === false ? "w-0" : "w-48"
    } lg:w-72 bg-[#10181f] ml-4 my-12 rounded overflow-hidden h-screen duration-500`}>
      <button
        className="fixed lg:hidden z-90 bottom-10 right-10 bg-[#10181f] w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4x hover:bg-[#112e48] duration-300"
        onClick={toggleSideMenuHandle}
      >
        <FiMinimize2 size={24} className="text-[#fff]" />
      </button>
      <div className="mt-16 mx-4 lg:mt-8 lg:mx-8 ">
        <div className="bg-[#1b3a559f] text-center  py-2 rounded w-40 mb-4 cursor-pointer"
        onClick={()=>{
          setCreateBlogFunction(prev => !prev)
       
        }}
        >
          <p className="text-white font-semibold tracking-wider">Create Blog Post</p>
        </div>
        <div className="bg-[#1b3a559f] text-center  py-2 rounded w-40 cursor-pointer"
                onClick={()=>{
                  setEditBlogFunction(prev => !prev)
             
                }}
        >
          <p className="text-white font-semibold tracking-wider">Edit Blog Post</p>
        </div>
      </div>
    
    </div>
  );
};

export default SideMenu;
