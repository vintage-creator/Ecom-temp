import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";


const DemoBlogDetails = () => {
  const { myId2 } = useParams();



  const [isOverflow, setIsOverflow] = useState("");
  const descDiv = useRef(null);

  useEffect(() => {
    divHeight();
  }, [isOverflow]);

  const divHeight = () => {
    const divHeight = descDiv.current.offsetHeight;
    if (divHeight > 450) { // Add vertical scroll when height exceeds 300px
      setIsOverflow("md:overflow-y-scroll md:pr-2");
    } else {
      setIsOverflow("");
    }
  };



  

  const storageValue = JSON.parse(localStorage.getItem("demoPost"));
  
console.log(storageValue)
console.log(typeof myId2)
const singleItem = storageValue.find((items)=> {
    return items.id.toString() === myId2
 })



  const { image, title, desc } = singleItem;

  return (
    <>
      <h1 className="font-bold pt-80 px-4  text-3xl text-zinc-800 tracking-wider text-center w-full md:pb-6 md:pt-52 lg:pt-40">
        {title}
      </h1>
      <div className="p-6">
        <div
          className="bg-white  md:h-[500px] rounded-lg overflow-hidden w-full md:flex   md:w-[100%]   md:justify-between"
          style={{
            boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
          }}
        >
          <div
            className="h-[400px] md:w-[47%] md:h-[unset] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${image}")` }}
          ></div>

          <div
          
            className={`text-[0.9rem]  lg:text-[1rem] p-4  md:w-[47%]  md:p-[unset] md:mt-6 md:mr-6 md:mb-4 ${isOverflow}`}
          >
  
            <p   ref={descDiv} className="text-justify text-zinc-600 ">{desc}</p>
   
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoBlogDetails;
