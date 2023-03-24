import React, { useContext, useState } from "react";
import { FiMinimize2 } from "react-icons/fi";
import myGlobalContext from "../context";
import { v4 as uuidv4 } from "uuid";
import "./Spinner.css";
function AddBlogPostTab() {
  const { spinner, setSpinner, setOpenAndClose, loadData } =
    useContext(myGlobalContext);

  console.log(loadData);

  const [data, setUserData] = useState({
    title: "",
    image: "",
    date: "",
    desc: "",
  });
  const { title, image, date, desc } = data;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...data,
      [name]: value,
    });
    console.log({ ...data, [name]: value });
  };

  const newData = { id: uuidv4(), title, image, date, desc };
  const updatePost = () => {
    setSpinner(true);
    setTimeout(() => {
      const getData = localStorage.getItem("post")
        ? JSON.parse(localStorage.getItem("post"))
        : [];

      const getDataCopy = [newData, ...getData];
      localStorage.setItem("post", JSON.stringify(getDataCopy));

      setUserData({
        title: "",
        image: "",
        date: "",
        desc: "",
      });
      setSpinner(false);
    }, 3000);
  };
  return (
    <div className=" bg-white rounded-md drop-shadow-xl p-2">
      <div className="  w-[60vw] p-16 h-[60vh] relative overflow-y-scroll">
        {""}

        <h2 className="text-zinc-900 font-bold text-xl">Add Blog Post</h2>

        <div
          className=" rounded-full absolute right-4 top-4 cursor-pointer"
          onClick={() => setOpenAndClose("hidden")}
        >
           <FiMinimize2 size={24} className="text-[#10181f]"/> 
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-700"
            style={{ fontWeight: "bold" }}
          >
            Title
          </label>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[100%] rounded outline-none"
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
        {spinner && <div className="loading"></div>}

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

export default AddBlogPostTab;