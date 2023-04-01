import React, { useContext, useEffect } from "react";
import PostComponent from "../components/PostComponent";
import myGlobalContext from "../context";


function Home() {
  const {setPage}=useContext(myGlobalContext)
  


  const pageName = ()=>{
    setPage("home")
  }

  useEffect(()=>{
    pageName()
  })

  return (
    
    <div>
            
      <div className="absolute z-10 top-[300px] md:top-[200px] left-8 w-[70vw] md:w-[60vw]">
        <h1 className="text-white text-2xl md:text-6xl mb-4 font-bold">
          Zanzibar Tech Island
        </h1>
        <p className="w-[80%] md:w-[60%] text-white  tracking-wider mb-6 text-md md:text-xl font-bold">
          This is Zanzibar Tech Island, we serve you nutritious spicy-hot tech
          update.We are building a community of tech enthusiast called Tech
          Zanzibars, exciting?
        </p>
        <a href="/" className="text-zinc-800 bg-white rounded p-2 font-bold">
          Learn more..
        </a>
      </div>
      <div
        className="w-full  bg-cover bg-center h-[700px] md:h-[600px]"
        style={{ backgroundImage: "url(./myImages/heroImage.jpg)" }}
      >
        <div className="w-full h-[700px] md:h-[600px] bg-[rgba(0,0,0,0.3)]"></div>
      </div>

      <PostComponent />
    </div>
  );
}

export default Home;
