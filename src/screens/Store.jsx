import React, { useState, useContext, useEffect } from "react";
import StoreComponent from "../components/StoreComponent";
import CartComponent from "../components/CartComponent";
import Modal from "../components/Modal";
import PaymentUserDetailsForm from "../components/PaymentUserDetailsForm";
import myGlobalContext from "../context";

const Store = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { cartOpen, paymentOpen, setPage } = useContext(myGlobalContext);

  const pageName = () => {
    setPage("home");
  };

  useEffect(() => {
    pageName();
  }, []);

  useEffect(() => {
    const totalSlides = 2; // Total number of slides

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[238px]  md:mt-[180px] lg:mt-[100px]">
      <div
  className="flex md:hidden w-full h-[300px] overflow-hidden relative bg-cover justify-center items-center"
  style={{
    backgroundImage: `url('${
      currentSlide === 0 ? "./myImages/pc.jpg" : "./myImages/pc3.jpg"
    }')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* <div
    className="absolute inset-0 bg-black opacity-50"
    style={{ backdropFilter: "blur(8px)" }}
  ></div>
  <div className="flex flex-col px-5 justify-center items-center relative z-10">
    <h1 className="text-3xl text-center font-bold text-white">
      <span className="text-red-600 font-exo-2">Unbeatable </span> prices you can't
      find anywhere
    </h1>
    <button className="bg-black w-[150px] text-white rounded-lg py-1 mt-5 font-bold hover:bg-red-600 duration-500">
      Contact Us
    </button>
  </div> */}
</div>


      <div
        className="hidden md:flex relative h-[400px] bg-cover mt-[100px] justify-center items-center"
        style={{
          backgroundImage: `url('${
            currentSlide === 0 ? "./myImages/pc.jpg" : "./myImages/pc3.jpg"
          }')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ backdropFilter: "blur(8px)" }}
        ></div>
        <div className="flex flex-col px-5 justify-center items-center relative z-10">
          <h1 style={{ fontFamily: 'Ubuntu' }} className="text-5xl text-center font-bold flex flex-col gap-5 text-white">
            <p><span className="text-red-800">Unbeatable</span> prices</p>you can't find
            anywhere
          </h1>
          <button className="bg-black w-[160px] text-white rounded-lg py-2 mt-10 font-bold text-[20px] hover:bg-red-800 duration-500">
           <a href="mailto:mperfectcomputers@gmail.com">Contact Us</a>
          </button>
        </div>
      </div>

      {paymentOpen && (
        <Modal>
          <PaymentUserDetailsForm />
        </Modal>
      )}

      {cartOpen && <CartComponent />}

      <StoreComponent />
    </div>
  );
};

export default Store;
