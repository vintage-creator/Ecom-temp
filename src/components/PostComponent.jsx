import React, { useContext } from "react";
import { RiShareLine } from "react-icons/ri";
import myGlobalContext from "../context";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";
import DemoBlogPost from "./DemoBlogPost";
function PostComponent() {
  const {
    loadData,
    moreArticles,
    setMoreArticles,
  } = useContext(myGlobalContext);

  const sliceData = (data, start, end) => {
    const newData11 = data.slice(start, end);
    return newData11;
  };

  const sliceData2 = (data, start) => {
    const newData11 = data.slice(start);
    return newData11;
  };

  console.log(loadData, "chcihci");

  // Trucate text fuction starts here
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  // Truncate text function ends here

  return (
    <>
{
loadData.length === 0 ? <p className="font-semibold text-zinc-900 tracking-wider text-center text-2xl">Go to the Dashboard and create your first blog post</p>:
( 

<>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2 md:p-4">
  {sliceData(loadData, 0, 2).map((items) => {
    return (
      <div
        key={items.id}
        className="overflow-hidden bg-white   rounded"
        style={{
          boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
        }}
      >
        <Link className="w-[47%]" to={`/BlogDetailPage/${items.id}`}>
          <div
            className=" h-[200px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${items.image}")` }}
          ></div>
        </Link>
        <div className="flex flex-col justify-between text-left p-2 text-[0.9rem]  lg:text-[1rem] tracking-wider  uppercase">
          <p>{truncateText(items.title, 69)}</p>

          <div className="w-full flex justify-end mb-2">
          <RWebShare
             data={{
              title: `${items.title}`,
              url: `http://localhost:3000/BlogDetailPage/${items.id}`,
            
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 cursor-pointer hover:bg-gray-100">
              {" "}
              <RiShareLine size={18} className="text-blue-400" />
            </div>
      
           </RWebShare >
          </div>
        </div>
      </div>
    );
  })}
</div>

<div className="grid gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4  md:p-4">
  {sliceData(loadData, 2, 6).map((items) => {
    return (
      <div
        className="overflow-hidden  bg-white   rounded "
        key={items.id}
        style={{
          boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
        }}
      >
        <Link to={`/BlogDetailPage/${items.id}`}>
          <div
            className="w-[100%] h-[200px] bg-cover bg-center bg-no-repeat mb-2"
            style={{ backgroundImage: `url("${items.image}")` }}
          ></div>
        </Link>
        <div className="flex flex-col justify-between  h-[180px] p-2 md:p-4 tracking-wider  uppercase text-[0.9rem] lg:text-[1rem] md:text-[0.8rem] ">
          <p className="mb-4">{truncateText(items.title, 69)}</p>

          <div className="flex justify-end mb-2">
          <div className="w-full flex justify-end mb-2">
          <RWebShare
             data={{
              title: `${items.title}`,
              url: `http://localhost:3000/BlogDetailPage/${items.id}`,
            
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 cursor-pointer hover:bg-gray-100">
              {" "}
              <RiShareLine size={18} className="text-blue-400" />
            </div>
      
           </RWebShare >
          </div>
          </div>
        </div>
      </div>
    );
  })}

  {moreArticles &&
    sliceData2(loadData, 6).map((items) => {
      return (
        <div
          className="overflow-hidden  bg-white   rounded "
          key={items.id}
          style={{
            boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
          }}
        >
          <Link to={`/BlogDetailPage/${items.id}`}>
            <div
              className="w-[100%] h-[200px] bg-cover bg-center bg-no-repeat mb-2"
              style={{ backgroundImage: `url("${items.image}")` }}
            ></div>
          </Link>
          <div className="flex flex-col justify-between  h-[180px] text-left p-2 md:p-4 tracking-wider  uppercase text-[0.9rem] lg:text-[1rem] md:text-[0.8rem] ">
            <p className="mb-4">{truncateText(items.title, 69)}</p>

            <div className="flex justify-end mb-2">

          <div className="w-full flex justify-end mb-2">
          <RWebShare
             data={{
              title: `${items.title}`,
              url: `http://localhost:3000/BlogDetailPage/${items.id}`,
            
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 cursor-pointer hover:bg-gray-100">
              {" "}
              <RiShareLine size={18} className="text-blue-400" />
            </div>
      
           </RWebShare >
          </div>
            </div>
          </div>
        </div>
      );
    })}
</div>
</>
)
}
      { moreArticles === false && loadData.length > 6   &&  <div
          className="w-[40vw] cursor-pointer flex justify-center items-center my-2 py-2 rounded border-[1.5px] border-zinc-700 mx-4"
          onClick={() => setMoreArticles((prev) => !prev)}
        >
          <p className="font-semibold tracking-wider text-lg">MORE ARTICLES</p>
        </div>}

        
    { moreArticles === true && loadData.length > 6  &&  <div
          className="w-[40vw] cursor-pointer flex justify-center items-center my-2 py-2 rounded border-[1.5px] border-zinc-700 mx-4"
          onClick={() => setMoreArticles((prev) => !prev)}
        >
          <p className="font-semibold tracking-wider text-lg">LESS ARTICLES</p>
        </div>}


<DemoBlogPost/>

    </>
  );
}

export default PostComponent;
