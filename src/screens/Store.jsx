import React, { useState, useContext, useEffect } from "react";
import StoreComponent from "../components/StoreComponent";
import CartComponent from "../components/CartComponent";
import PaymentModal from "../components/PaymentModal";
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
        className="flex lg:hidden w-full h-[300px] overflow-hidden bg-cover"
        style={{
          backgroundImage: `url('${
            currentSlide === 0
              ? "./myImages/lapt1.jpg"
              : "./myImages/pic3.png"
          }')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        className="hidden lg:flex  h-[450px]  bg-cover mt-[100px]"
        style={{
          backgroundImage: `url('${
            currentSlide === 0 ? "./myImages/pic2.png" : "./myImages/pic3.png"
          }')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
         
        }}
      ></div>

      {paymentOpen && (
        <PaymentModal>
          <PaymentUserDetailsForm />
        </PaymentModal>
      )}

      {cartOpen && <CartComponent />}

      <StoreComponent />
    </div>
  );
};

export default Store;
