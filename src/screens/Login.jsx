import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myGlobalContext from "../context";

import { BiHomeSmile } from "react-icons/bi";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import STRAPI_BASEURL from "../config";

function Login() {
  console.log(STRAPI_BASEURL, "chima203");
  const { setSignupLoginPan, setPage } = useContext(myGlobalContext);
  const navigate = useNavigate();
  const [activityIndicator, setActivityIndicator] = useState(false);
  const [btnColor, setBtnColor] = useState("#10181f");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInput;
  // console.log(Object.keys(userInput),"chima")
  const loginURL = `${STRAPI_BASEURL}/api/auth/local`;

  const loginUser = async () => {
    try {
      setActivityIndicator(true);
      setBtnColor("#1b3a559f");
      setBtnDisabled(true);

      const res = await axios.post(loginURL, {
        identifier: email,
        password: password,
      });
      console.log(res);
      setUserInput({
        email: "",
        password: "",
      });
      toast.success("Login successful");
      setSignupLoginPan(false);
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      console.log(err.message);
      toast.error(
        "Something went wrong, possible cause: server not hosted globally for now"
      );
    } finally {
      setActivityIndicator(false);
      setBtnColor("#10181f");
      setBtnDisabled(false);
    }
  };
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

  const pageName = () => {
    setPage("Login");
  };

  useEffect(() => {
    pageName();
  });

  console.log(navigate);
  return (
    <>
      <Link to="/">
        <div className="h-12 w-12 mt-8 ml-8  flex justify-center items-center rounded-full bg-gray-300  hover:bg-white hover:text-zinc-800">
          <BiHomeSmile className="h-6 w-6   text-zinc-800 hover:bg-white hover:text-zinc-800" />
        </div>
      </Link>
      <ToastContainer autoClose={2000} />
      {/* <div className='w-12 h12 flex items-center justify-center'>

</div> */}
      <div className=" md:flex md:flex-row-reverse md:justify-around bg-white text-dark">
        <div
          className="w-[100vw] md:w-[40vw] h-[500px] -mt-16 bg-no-repeat bg-contain bg-center "
          style={{ backgroundImage: "url(./myImages/login.jpg)" }}
        ></div>
        <div className="mt-4 mb-12 md:mt-12 w-[100vw] md:w-[40vw] flex flex-col  items-center md:items-end ">
          <h1 className="bg-dark font-bold text-2xl tracking-wider">Login</h1>

          <input
            type="text"
            id=""
            placeholder="Email"
            className="w-[95%]  h-12 border-zinc-500 border-[2px] rounded px-2 mt-6"
            value={email}
            name="email"
            onChange={onChangeHandler}
          />
          <input
            type="password"
            id=""
            placeholder="Password"
            className="w-[95%] mt-4 h-12 border-zinc-500 border-[2px] rounded px-2"
            value={password}
            name="password"
            onChange={onChangeHandler}
          />

          <div className=" w-[95%] mt-4 relative">
            <input
              type="button"
              id=""
              value="Login"
              disabled={btnDisabled}
              onClick={loginUser}
              className={` w-full h-12  border-[2px] rounded  font-bold tracking-wider 
  bg-[${btnColor}] text-white hover:bg-[#1b3a559f]`}
            />
            <Spinner
              animating={activityIndicator}
              // color='blue'
              style={{ position: "absolute", top: "25%", right: "45%" }}
            />
          </div>

          <Link to="/Signup">
            <p className="mt-4 cursor-pointer">
              Don't have an account?{" "}
              <span className="text-blue-700">Signup</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
