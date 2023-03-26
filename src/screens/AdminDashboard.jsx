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
    <div className="flex">
      <SideMenu />
      {componentName === "addPost" && (
        <div className="p-8">
          <AddBlogPostTab />
        </div>
      )}

{componentName === "editPost" && 
<div className="p-8">
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
