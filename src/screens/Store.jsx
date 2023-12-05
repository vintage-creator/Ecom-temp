import React, { useState, useContext, useEffect } from "react";
import StoreComponent from "../components/StoreComponent";
import CartComponent from "../components/CartComponent";
import PaymentModal from "../components/PaymentModal";
import PaymentUserDetailsForm from "../components/PaymentUserDetailsForm";
import ReactPlayer from "react-player";
import myGlobalContext from "../context";
const Store = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
const {cartOpen, paymentOpen, setPage} = useContext(myGlobalContext)


const pageName = ()=>{
  setPage("home")
}

useEffect(()=>{
  pageName()
})

useEffect(() => {
  const totalSlides = 2; // Total number of slides

  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, 5000);

  return () => clearInterval(interval);
}, []);



return (
  <div className="relative">

    <div className="w-full h-[700px] md:h-[600px] relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        {currentSlide === 0 ? (
          <img src="./myImages/pic2.png" alt="Slide 2" className="w-full mt-[100px] md:mt-[120px] object-contain" />
        ) : null}
        {currentSlide === 1 ? (
          <a href="mailto:mperfectcomputers@gmail.com"><img src="./myImages/pic3 (1).png" alt="Slide 3" className="w-full mt-[100px] md:mt-[120px] object-cover" /></a>
        ) : null}
      </div>

    </div>

    {paymentOpen && <PaymentModal><PaymentUserDetailsForm /></PaymentModal>}
    {cartOpen && <CartComponent />}
    <StoreComponent />
  </div>
);
};

export default Store;
