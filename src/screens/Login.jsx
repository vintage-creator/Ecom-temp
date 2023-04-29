import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import myGlobalContext from "../context";

import { BiHomeSmile} from "react-icons/bi";
function Login() {

const [userInput, setUserInput]=useState({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
})

const { email,password } = userInput
// console.log(Object.keys(userInput),"chima")
const loginURL = "http://localhost:1337/api/auth/local"

const onChangeHandler = (e)=>{
  const {value, name} = e.target
  setUserInput({
    ...userInput,[name]:value
  })
  console.log({
    ...userInput,[name]:value
  })
}

  const {
    setPage,
  
  } = useContext(myGlobalContext);

  const pageName = () => {
    setPage("Login");
  };

  useEffect(() => {
    pageName();
  });


  const navigate = useNavigate();
  console.log(navigate)
  return (
<>
<Link to="/">
<div className='h-12 w-12 mt-8 ml-8  flex justify-center items-center rounded-full bg-gray-300  hover:bg-white hover:text-zinc-800'>
<BiHomeSmile
className='h-6 w-6   text-zinc-800 hover:bg-white hover:text-zinc-800'

/>
</div>
</Link>
{/* <div className='w-12 h12 flex items-center justify-center'>

</div> */}
<div className=' md:flex md:flex-row-reverse md:justify-around bg-white text-dark'>

<div
className='w-[100vw] md:w-[40vw] h-[500px] -mt-16 bg-no-repeat bg-contain bg-center '
 style={{ backgroundImage: "url(./myImages/login.jpg)"}}
>

</div>
<div
className='mt-4 mb-12 md:mt-12 w-[100vw] md:w-[40vw] flex flex-col  items-center md:items-end '
>

<h1
className='bg-dark font-bold text-2xl tracking-wider'
>Login</h1>

<input type="text"  id=""
  placeholder='Email'
  className='w-[95%]  h-12 border-zinc-500 border-[2px] rounded px-2 mt-6'
  value={email}
  name="email"
  onChange={onChangeHandler}
  />
<input type="password"  id=""
  placeholder='Password'
  className='w-[95%] mt-4 h-12 border-zinc-500 border-[2px] rounded px-2'
  value={password}
  name="password"
  onChange={onChangeHandler}
  />
<input type="button"  id=""
  value='Login'

 
  className='w-[95%] mt-4 h-12  border-[2px] rounded px-2 font-bold tracking-wider bg-[#10181f] text-white hover:bg-[#1b3a559f]'
  
  /> 

<Link to="/Signup">
<p
  className='mt-4 cursor-pointer'>Don't have an account?  <span className='text-blue-700'>Signup</span>
  </p>
</Link>
</div>
    </div>
</>
  )
}

export default Login