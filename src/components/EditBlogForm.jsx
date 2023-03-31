import React, { useContext, useEffect } from "react";
import { FiMinimize2 } from "react-icons/fi";
import myGlobalContext from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import "./Spinner.css";
function EditBlogForm() {
  const {
    spinner2,
    setSpinner2,
    setOpenAndClose2,
    data2,
    setUserData2,
    postID,
    setComponentName,
    setRunme,
  } = useContext(myGlobalContext);

  const componentName1 = () => {
    setComponentName("editPost");
  };

  useEffect(() => {
    componentName1();
  });
  const { title, image, date, desc } = data2;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserData2({
      ...data2,
      [name]: value,
    });
    console.log({ ...data2, [name]: value });
  };

  const newData = { id: uuidv4(), title, image, date, desc };
  const updatePost2 = () => {
    setSpinner2(true);
    setTimeout(() => {
      const getData = localStorage.getItem("post")
        ? JSON.parse(localStorage.getItem("post"))
        : [];

      const { id } = postID;
      const copyGetData = [...getData];
      const indexCopyGetData = copyGetData.findIndex(
        (items) => items.id === id
      );

      const specificData = copyGetData[indexCopyGetData];
      // const getDataCopy = [newData, ...getData];
      specificData.title = newData.title;
      specificData.image = newData.image;
      specificData.desc = newData.desc;
      specificData.date = newData.date;
      // console.log(indexCopyGetData, "ji ma sun number")
      // console.log(specificData, "ji ma sun")
      localStorage.setItem("post", JSON.stringify(copyGetData));

      setUserData2({
        title: "",
        image: "",
        date: "",
        desc: "",
      });
      setRunme((prev) => !prev);
      setSpinner2(false);

      toast.success("Edited and updated successfully");
        // setOpenAndClose2("hidden");
 
    }, 3000);
  };

  return (
    <div className="bg-[#f6f5ec]  drop-shadow-xl p-2">
      <div className=" w-[80vw] p-8 relative overflow-y-scroll md:w-[60vw] md:p-16 h-[80vh] ">
        {""}

        <h2 className="text-zinc-900 font-bold text-xl">Edit Blog Post</h2>

        <div
          className="fixed right-12 top-8"
          onClick={() => setOpenAndClose2("hidden")}
        >
          <FiMinimize2 size={24} className="text-[#10181f]" />
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-900"
            style={{ fontWeight: "bold" }}
          >
            Title
          </label>
          <input
            className="  bg-white border-2 border-zinc-300 text-gray-700 px-3 py-2 mt-2 w-[100%] rounded outline-none"
            name="title"
            value={title}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-900"
            style={{ fontWeight: "bold" }}
          >
            Image URL
          </label>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 px-3 py-2 mt-2 w-[100%] rounded outline-none"
            name="image"
            value={image}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-900"
            style={{ fontWeight: "bold" }}
          >
            Description
          </label>
          <textarea
            className="resize-none bg-white border-2 border-zinc-300 text-gray-700 px-3 py-2 mt-2 w-[100%] rounded outline-none"
            rows={10}
            name="desc"
            value={desc}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <div>
            <label
              className="tracking-wider text-zinc-900"
              style={{ fontWeight: "bold" }}
            >
              Date
            </label>
          </div>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 px-3 py-2 mt-2 w-[50%] rounded outline-none"
            type="date"
            name="date"
            value={date}
            onChange={onChangeHandler}
            required
          />
        </div>
        {spinner2 && <div className="loading"></div>}
        {title && image && date && desc ? (
          <button
            className="bg-[#86efac] px-3 py-2  w-[50%] rounded font-bold mt-8 tracking-wider text-zinc-900"
            onClick={updatePost2}
          >
            SUBMIT
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="cursor-not-allowed bg-[#86efac] opacity-50 px-3 py-2  w-[50%] rounded font-bold mt-8 tracking-wider text-zinc-900"
            onClick={updatePost2}
          >
            SUBMIT
          </button>
        )}
        <ToastContainer 
        autoClose={2000}
        closeOnClick
        pauseOnHover
        />
      </div>
    </div>
  );
}

export default EditBlogForm;
