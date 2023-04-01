import React, { useCallback, useContext, useEffect, useState } from "react";
import myGlobalContext from "../context";
const SideMenu = () => {


  const {
    setComponentName
  } = useContext(myGlobalContext);

  // const [openSideMenu, setOpenSideMenu, ] = useState(false);
  const [editBlogFunction, setEditBlogFunction, ] = useState(true);
  const [createBlogFunction, setCreateBlogFunction, ] = useState(true);
  

  // const toggleSideMenuHandle = () => {
  //   setOpenSideMenu((prev) => !prev);
  // };


  const editBlog=useCallback(
    ()=>{
      setComponentName("editPost")
    },[setComponentName]
  )
  useEffect(()=>{
    editBlog()
  },[editBlogFunction, editBlog])


  const createBlog=useCallback(
    ()=>{
      setComponentName("addPost")
    },[setComponentName]
  )
  useEffect(()=>{
    createBlog()
  },[createBlogFunction, createBlog])


  return (
    <div      className="w-[100%]
      flex  justify-center">

      <div >
        <div className=" bg-[#1b3a559f] text-center  py-2 rounded w-40 mb-4 cursor-pointer"
        onClick={()=>{
          setCreateBlogFunction(prev => !prev)
       
        }}
        >
          <p className="text-white font-semibold tracking-wider">Create Blog</p>
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
