import React, { useContext, useEffect } from "react";
import StoreComponent from "../components/StoreComponent";
import CartComponent from "../components/CartComponent";
import PaymentModal from "../components/PaymentModal";
import PaymentUserDetailsForm from "../components/PaymentUserDetailsForm";
import myGlobalContext from "../context";
const Store = () => {
  
const {cartOpen, paymentOpen, setPage} = useContext(myGlobalContext)


const pageName = ()=>{
  setPage("home")
}

useEffect(()=>{
  pageName()
})

  return (
    <div className="relative">
      <div className="absolute z-10 top-[250px] md:top-[150px] left-8 w-[70vw] md:w-[60vw]">
        <h1 className="w-[80%] md:w-[70%] mt-[60px] text-white tracking-wider mb-4 text-lg  md:text-xl lg:text-2xl font-bold">
        We are your{" "}
          <span className="font-bold text-yellow-500 text-xl">
          one-stop-shop
          </span>{" "}
          for the best computers in Nigeria! Located at the heart of Lagos, <i>Perfect Computers</i> is dedicated to help you with high-quality, low-cost, and durable computers.
        </h1>
        <div className="mt-[33px]">
        <a href="mailto:mperfectcomputer@gmail.com" className="text-zinc-800 hover:text-white bg-white hover:bg-yellow-500 rounded pt-2 pb-2 pl-4 pr-4 font-bold">
          Contact us
        </a>
        </div>
      </div>
      <div
        className="w-full  bg-cover bg-center h-[700px] md:h-[600px]"
        style={{ backgroundImage: "url(./myImages/heroImage.jpg)"  }}
      >
        <div className="w-full h-[700px] md:h-[600px] bg-[rgba(0,0,0,0.4)]"></div>
      </div>
      { paymentOpen &&<PaymentModal><PaymentUserDetailsForm /></PaymentModal>}
      { cartOpen &&<CartComponent/>}
   <StoreComponent />
    </div>
  );
};

export default Store;
