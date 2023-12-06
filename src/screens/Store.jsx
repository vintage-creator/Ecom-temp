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
    <div className="mt-[242px] sm:mt-[50px] md:mt-[100px] lg:mt-[30px]">
      <div
        className="block lg:hidden w-full h-[300px] overflow-hidden bg-cover"
        style={{
          backgroundImage: `url('${
            currentSlide === 0
              ? "./myImages/lapsale.jpg"
              : "./myImages/pic3.png"
          }')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        className="hidden lg:block w-full h-[450px]  bg-contain mt-[100px]"
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
