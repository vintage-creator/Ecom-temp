import React, { useContext } from "react";
import { RiDeleteBin4Line, RiEditLine, RiShareLine } from "react-icons/ri";
import myGlobalContext from "../context";
import { Link } from "react-router-dom";

function AllArticles() {
  const {
    loadData,
    deleteHandler,
    setOpenAndClose2,
    setPostID,
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
      <div className="flex flex-wrap  px-4 md:px-14 justify-center md:flex md:flex-row md:justify-between">
        {loadData.map((items) => {
          return (
            <div
              className="overflow-hidden w-[90vw] h-[400px] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] bg-white   rounded-lg my-6 "
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
              <div className="flex flex-col justify-between  h-[180px] text-left ml-4 w-[90%] tracking-wider  uppercase text-[0.9rem] lg:text-[1rem] md:text-[0.8rem] ">
                <p className="mb-4">{truncateText(items.title, 69)}</p>

                <div className="w-[90%] flex justify-between mb-2">
                  <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                    <RiDeleteBin4Line
                      size={18}
                      className="text-blue-400"
                      onClick={() => deleteHandler(items.id)}
                    />
                  </div>
                  <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                    {" "}
                    <RiEditLine
                      size={18}
                      className="text-blue-400"
                      onClick={() => {
                        setOpenAndClose2("");
                        setPostID({
                          id: items.id,
                          title: items.title,
                          image: items.image,
                          desc: items.desc,
                          date: items.date,
                        });
                      }}
                    />
                  </div>
                  <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                    {" "}
                    <RiShareLine size={18} className="text-blue-400" />
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
                className="overflow-hidden w-[90vw] h-[400px] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] bg-white   rounded-lg my-6 "
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
                <div className="flex flex-col justify-between  h-[180px] text-left ml-4 w-[90%] tracking-wider  uppercase text-[0.9rem] lg:text-[1rem] md:text-[0.8rem] ">
                  <p className="mb-4">{truncateText(items.title, 69)}</p>

                  <div className="w-[90%] flex justify-between mb-2">
                    <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                      <RiDeleteBin4Line
                        size={18}
                        className="text-blue-400"
                        onClick={() => deleteHandler(items.id)}
                      />
                    </div>
                    <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                      {" "}
                      <RiEditLine
                        size={18}
                        className="text-blue-400"
                        onClick={() => {
                          setOpenAndClose2("");
                          setPostID({
                            id: items.id,
                            title: items.title,
                            image: items.image,
                            desc: items.desc,
                            date: items.date,
                          });
                        }}
                      />
                    </div>
                    <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                      {" "}
                      <RiShareLine size={18} className="text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      { moreArticles === false && loadData.length > 6   &&  <div
          className="w-[40vw] cursor-pointer flex justify-center items-center my-2 py-2 rounded-lg border-[1.5px] border-zinc-700 mx-4"
          onClick={() => setMoreArticles((prev) => !prev)}
        >
          <p className="font-semibold tracking-wider text-lg">MORE ARTICLES</p>
        </div>}

        
    { moreArticles === true && loadData.length > 6  &&  <div
          className="w-[40vw] cursor-pointer flex justify-center items-center my-2 py-2 rounded-lg border-[1.5px] border-zinc-700 mx-4"
          onClick={() => setMoreArticles((prev) => !prev)}
        >
          <p className="font-semibold tracking-wider text-lg">LESS ARTICLES</p>
        </div>}
    </>
  );
}

export default AllArticles;
