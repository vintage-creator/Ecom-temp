import React, {  useContext, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import myGlobalContext from "../context";
import AddBlogPostTab from "../components/AddBlogPostTab";
import EditBlogForm from "../components/EditBlogForm";
import AllArticles from "../components/AllArticles";
import EditPostModal from "../components/EditPostModal";
function AdminDashboard() {
  const { setPage, componentName } = useContext(myGlobalContext);

  const pageName = () => {
    setPage("adminDashboard");
  };

  useEffect(() => {
    pageName();
  });
  return (

    <div className="bg-gray-300 grid  md:grid-cols-4 md:gap-x-4 p-6 ">
     
      <div className="mt-2  rounded overflow-y-scroll md:h-screen bg-gray-300 md:col-span-3 ">
      {componentName === "addPost" && <AddBlogPostTab />}
        {componentName === "editPost" && <AllArticles />}

        {componentName === "editPost" && (
          <EditPostModal>
            <EditBlogForm />
          </EditPostModal>
        )}
      
      </div>
      <div className="grid order-first py-2 md:py-4 md:grid md:order-[unset] bg-[#10181f] rounded overflow-hidden md:h-screen">
        <SideMenu />
     
      </div>

    </div>

  );
}

export default AdminDashboard;
