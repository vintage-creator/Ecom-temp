import React, { useCallback, useContext, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import myGlobalContext from "../context";
import AddBlogPostTab from "../components/AddBlogPostTab";
import EditBlogForm from "../components/EditBlogForm";
import AllArticles from "../components/AllArticles";
import EditPostModal from "../components/EditPostModal";
function AdminDashboard() {
  const { setPage, componentName } = useContext(myGlobalContext);
  // const pageName = useCallback(()=>{
  //   setPage("adminDashboard")
  // },[setPage])
  const pageName = () => {
    setPage("adminDashboard");
  };

  useEffect(() => {
    pageName();
  });
  return (
    <div className="md:flex">
      <div className="w-[100vw] md:w-[30vw] overflow-hidden">
      <SideMenu />
      </div>
      {componentName === "addPost" && (
        <div className="w-[65%] p-8 flex justify-center items-center">
          <AddBlogPostTab />
        </div>
      )}

{componentName === "editPost" && 
<div className="w-full md:w-[65%] flex justify-center items-center">
<AllArticles/>
</div>
}


      {componentName === "editPost" && (
        <div className="p-8">
          <EditPostModal>
        <EditBlogForm />
      </EditPostModal>
        </div>
      )} 
    </div>
  );
}

export default AdminDashboard;
