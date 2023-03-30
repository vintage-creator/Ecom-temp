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

  } = useContext(myGlobalContext);




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
     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loadData.length>0?loadData.map((items) => {
          return (
            <div
              className=" h-[300px]  bg-white  "
              key={items.id}
              style={{
                boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
              }}
            >
              <Link to={`/BlogDetailPage/${items.id}`}>
                <div
                  className="w-[100%] h-[150px] md:h-[140px] bg-cover bg-center bg-no-repeat mb-2"
                  style={{ backgroundImage: `url("${items.image}")` }}
                ></div>
              </Link>
              <div className="grid grid-rows-2 h-[140px]  text-left  tracking-wider  uppercase text-[0.9rem] md:text-[0.8rem]">
                <p className="mb-4 mx-2">{truncateText(items.title, 69)}</p>

                <div className="self-end justify-items-center  grid grid-cols-3 mb-2 px-2 ">
                  <div className="rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                    <RiDeleteBin4Line
                      size={18}
                      className="text-blue-400"
                      onClick={() => deleteHandler(items.id)}
                    />
                  </div>
                  <div className=" rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
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
                  <div className=" rounded-full flex items-center justify-center bg-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
                    {" "}
                    <RiShareLine size={18} className="text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          );
        } )
    :

      <p className="font-semibold text-2xl text-center py-2 text-zinc-900 tracking-wider">No blog post yet, create your first blog post.</p>
    
      }

       </div> 

    </>
  );
}

export default AllArticles;
