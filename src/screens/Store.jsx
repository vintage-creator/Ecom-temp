import React, { useState, useContext, useEffect } from "react";
import StoreComponent from "../components/StoreComponent";
import CartComponent from "../components/CartComponent";
import Modal from "../components/Modal";
import PaymentUserDetailsForm from "../components/PaymentUserDetailsForm";
import ReactPlayer from "react-player";
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
    }, 5000);

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
  <div
    className="absolute inset-0 bg-black opacity-50"
    style={{ backdropFilter: "blur(8px)" }}
  ></div>
  <div className="flex flex-col px-5 justify-center items-center relative z-10">
    <h1 className="text-3xl text-center font-bold text-white">
      <span className="text-red-600">Unbeatable Prices</span> You Can't
      Find Anywhere
    </h1>
    <button className="bg-black w-[150px] text-white rounded-lg py-1 mt-5 font-bold hover:bg-red-600 duration-500">
      Contact Us
    </button>
  </div>
</div>


      <div
        className="hidden md:flex relative h-[450px] bg-cover mt-[100px] justify-center items-center"
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
          style={{ backdropFilter: "blur(2px)" }}
        ></div>
        <div className="flex flex-col px-5 justify-center items-center relative z-10">
          <h1 className="text-5xl text-center font-bold flex flex-col gap-5 text-white">
            <p className="text-red-600">Unbeatable Prices</p> You Can't Find
            Anywhere
          </h1>
          <button className="bg-black w-[200px] text-white rounded-lg py-2 mt-10 font-bold text-[20px] hover:bg-red-600 duration-500">
            Contact Us
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
