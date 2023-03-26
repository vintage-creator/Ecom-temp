import React, { useContext, useEffect } from "react";
import StoreComponent from "../components/StoreComponent";
import CartComponent from "../components/CartComponent";
import PaymentModal from "../components/PaymentModal";
import PaymentUserDetailsForm from "../components/PaymentUserDetailsForm";
import myGlobalContext from "../context";
const Store = () => {
  
const {cartOpen, paymentOpen, setPage} = useContext(myGlobalContext)


const pageName = ()=>{
  setPage("store")
}

useEffect(()=>{
  pageName()
})

  return (
    <div className="relative">
      <div className="absolute z-10 top-[250px] md:top-[150px] left-8 w-[70vw] md:w-[60vw]">
      <h1 className="text-white text-2xl md:text-6xl mb-4 font-bold">
          Zanzibar Tech Store
        </h1>
        <p className="w-[80%] md:w-[60%] text-white  tracking-wider mb-6 text-md md:text-xl font-bold">
          This is Zanzibar Tech Store and our{" "}
          <span className="font-bold text-yellow-500 text-xl">
            book section
          </span>{" "}
          is open for you to consume. Our books are curated by experts, very
          informative and the updated editions. We are building a community of
          tech enthusiast called Tech Zanzibars, exciting?
        </p>
        <a href="/" className="text-zinc-800 bg-white rounded p-2 font-bold">
          Learn more..
        </a>
      </div>
      <div
        className="w-full  bg-cover bg-center h-[700px] md:h-[600px]"
        style={{ backgroundImage: "url(./myImages/storeHeroImage.jpg)" }}
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
