import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myGlobalContext from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiHomeSmile } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as UUID } from "uuid";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import STRAPI_BASEURL from "../config";

function Signup() {
  const navigate = useNavigate();

  const [activityIndicator, setActivityIndicator] = useState(false);
  const [btnColor, setBtnColor] = useState("#10181f");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = userInput;
  // console.log(Object.keys(userInput),"chima")

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
    console.log({
      ...userInput,
      [name]: value,
    });
  };

  const { setPage } = useContext(myGlobalContext);

  const pageName = () => {
    setPage("Signup");
  };

  useEffect(() => {
    pageName();
  });

  const registerURL = `${STRAPI_BASEURL}/api/auth/local/register`;
  const registerUser = async () => {
    console.log(`${firstName}, ${lastName}, ${email}, ${password}`);
    try {
      setActivityIndicator(true);
      setBtnColor("#1b3a559f");
      setBtnDisabled(true);
      const res = await axios.post(registerURL, {
        username: UUID().toString() + firstName,
        firstName: firstName,
        email: email,
        password: password,
        lastname: lastName,
      });
      console.log(res);
      setUserInput({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      toast.success("Sign up successful");
      setTimeout(() => navigate("/Login"), 3000);
    } catch (error) {
      console.log(error.message);
      toast.error(
        "Something went wrong, possible cause: server not hosted globally for now"
      );
    } finally {
      setActivityIndicator(false);
      setBtnColor("#10181f");
      setBtnDisabled(false);
    }
  };
  return (
    <>
      <Link to="/">
        <div className="h-12 w-12 mt-8 ml-8  flex justify-center items-center rounded-full bg-gray-300  hover:bg-white hover:text-zinc-800">
          <BiHomeSmile className="h-6 w-6   text-zinc-800 hover:bg-white hover:text-zinc-800" />
        </div>
      </Link>
      <ToastContainer autoClose={2000} />
      {/* <div className='w-12 h12 flex bg-red-700 items-center justify-center'>

</div> */}
      <div className=" md:flex md:flex-row-reverse md:justify-around bg-white text-dark">
        <div
          className="w-[100vw] md:w-[40vw] h-[500px] -mt-12 bg-no-repeat bg-contain bg-center "
          style={{ backgroundImage: "url(./myImages/signup.jpg)" }}
        ></div>
        <div className="mt-4 mb-12 md:mt-12 w-[100vw] md:w-[40vw] flex flex-col  items-center md:items-end ">
          <h1 className="bg-dark font-bold text-2xl tracking-wider">Sign up</h1>
          <div className="flex space-x-4 w-[95%] mt-6">
            <input
              type="text"
              id=""
              placeholder="First name"
              className="w-[45%] h-12 border-zinc-500 border-[2px] rounded px-2"
              value={firstName}
              name="firstName"
              required
              onChange={onChangeHandler}
            />
            <input
              type="text"
              id=""
              placeholder="Last name"
              className="w-[45%] h-12 border-zinc-500 border-[2px] rounded px-2"
              value={lastName}
              required
              name="lastName"
              onChange={onChangeHandler}
            />
          </div>
          <input
            type="text"
            id=""
            placeholder="Email"
            className="w-[95%] mt-4 h-12 border-zinc-500 border-[2px] rounded px-2"
            value={email}
            required
            name="email"
            onChange={onChangeHandler}
          />
          <input
            type="password"
            id=""
            placeholder="Password"
            className="w-[95%] mt-4 h-12 border-zinc-500 border-[2px] rounded px-2"
            value={password}
            required
            name="password"
            onChange={onChangeHandler}
          />
          <div className=" w-[95%] mt-4 relative">
            <input
              type="button"
              id=""
              value="Signup"
              disabled={btnDisabled}
              onClick={registerUser}
              className={` w-full h-12  border-[2px] rounded  font-bold tracking-wider 
  bg-[${btnColor}] text-white hover:bg-[#1b3a559f]`}
            />
            <Spinner
              animating={activityIndicator}
              // color='blue'
              style={{ position: "absolute", top: "25%", right: "45%" }}
            />
          </div>

          <Link to="/Login">
            <p className="mt-4 cursor-pointer">
              Have an account already?{" "}
              <span className="text-blue-700">Login</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
