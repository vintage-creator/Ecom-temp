import React, { useContext, useState } from "react";
import { FiMinimize2 } from "react-icons/fi";
import myGlobalContext from "../context";
// import { v4 as uuidv4 } from "uuid";
import "./Spinner.css";
import { PaystackButton } from 'react-paystack'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PaymentUserDetailsForm() {
  const { spinner, roundNum, subTotal,setPaymentOpen } =
    useContext(myGlobalContext);

  const [paymentData, setpaymentData] = useState({
    name: "",
    email: "",
    phone: "",
  
  });
  const { name, email, phone } = paymentData;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setpaymentData({
      ...paymentData,
      [name]: value,
    });
    console.log({ ...paymentData, [name]: value });
  };

//   const newData = { id: uuidv4(), name, email, phone };


const componentProps = {

    email,

    amount:roundNum((subTotal + 10) * 100),

    metadata: {

      name,

      phone,

    },

    publicKey:"pk_test_0db18d70797d708b31c0f66b375c03250924409f",

    text: "Pay Now",

    onSuccess: () =>

    toast("PAYMENT SUCCESSFULL"),

    onClose: () =>toast("PAYMENT NOT COMPLETED"),

  }
 
  return (
    <>
    <ToastContainer />
    <div className=" bg-white rounded-md drop-shadow-xl p-2">
      <div className="  w-[95vw] h-[60vh]  relative overflow-y-scroll p-4 sm:w-[60vw] md:w-[70vw] md:p-16 md:h-[80vh] ">
        {""}

        <h2 className="text-zinc-900 font-bold text-xl">PAYMENT FORM</h2>

        <div
          className=" rounded-full absolute right-4 top-4 cursor-pointer cursor-pointer"
          onClick={() => setPaymentOpen(false)}
        >
           <FiMinimize2 size={24} className="text-[#10181f]"/> 
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-700"
            style={{ fontWeight: "bold" }}
          >
            FULL NAME
          </label>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[100%] rounded outline-none"
            name="name"
            value={name}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="tracking-wider text-zinc-700"
            style={{ fontWeight: "bold" }}
          >
            EMAIL ADDRESS
          </label>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[100%] rounded outline-none"
            name="email"
            value={email}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="mt-4">
          <div>
            <label
              className="tracking-wider text-zinc-700"
              style={{ fontWeight: "bold" }}
            >
              PHONE NO
            </label>
          </div>
          <input
            className=" bg-white border-2 border-zinc-300 text-gray-700 pl-3 py-2 mt-2 w-[50%] rounded outline-none"
            type="text"
            name="phone"
            value={phone}
            onChange={onChangeHandler}
            required
          />
        </div>
        {spinner && <div className="loading"></div>}

        {name && email && phone  ? (
            <div   className="bg-[#86efac] pl-3 py-2  w-[50%] rounded font-bold mt-8 tracking-wider text-zinc-900 text-center">
 <PaystackButton {...componentProps} />
 
            </div>
           
        ) : (
            <div  className="cursor-not-allowed bg-[#86efac] opacity-50 pl-3 py-2  w-[50%] rounded font-bold mt-8  text-zinc-900 text-center">
                Pay Now
            </div>
            
        )}
      </div>
    </div>
    </>
  );
}

export default PaymentUserDetailsForm;
