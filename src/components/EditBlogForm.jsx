import React, { useContext, useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import myGlobalContext from "../context";
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
  } = useContext(myGlobalContext);

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
  const updatePost = () => {
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
      setSpinner2(false);
    }, 3000);
  };

  return (
    <div className="bg-[#f6f5ec] rounded-md drop-shadow-xl p-2">
      <div className="  w-[60vw] p-16 h-[60vh] relative overflow-y-scroll">
        {""}

        <h2 className="text-zinc-900 font-bold text-xl">Edit Blog Post</h2>

        <div className="absolute right-4 top-4">
          <IoMdCloseCircle
            color="#eb3535"
            onClick={() => setOpenAndClose2("hidden")}
            size={30}
          />
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-700"
            style={{ fontWeight: "bold" }}
          >
            Title
          </label>
          <input
            className="  bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[100%] rounded outline-none"
            name="title"
            value={title}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-700"
            style={{ fontWeight: "bold" }}
          >
            Image URL
          </label>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[100%] rounded outline-none"
            name="image"
            value={image}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-700"
            style={{ fontWeight: "bold" }}
          >
            Description
          </label>
          <textarea
            className="resize-none bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[100%] rounded outline-none"
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
              className="tracking-wider text-zinc-700"
              style={{ fontWeight: "bold" }}
            >
              Date
            </label>
          </div>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[50%] rounded outline-none"
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
            className="bg-[#86efac] pl-3 py-2  w-[50%] rounded font-bold mt-8 tracking-wider text-zinc-900"
            onClick={updatePost}
          >
            SUBMIT
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="cursor-not-allowed bg-[#86efac] opacity-50 pl-3 py-2  w-[50%] rounded font-bold mt-8 tracking-wider text-zinc-900"
            onClick={updatePost}
          >
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
}

export default EditBlogForm;
