import React, { useContext } from "react";
import { 
  TfiTwitter,
  TfiFacebook,
  TfiPinterest,
  TfiInstagram,
  TfiYoutube
 } from "react-icons/tfi";
import * as Icons from "@heroicons/react/24/outline";
import myGlobalContext from "../context";
const Footer = () => {
  const {
    page,

  } = useContext(myGlobalContext);

  return (
    <>

    {
   page !== "Signup" && page !== "Login" &&  <div>
        <div className="border-b-[1px] border-gray-600 py-4 px-4 md:px-40 md:py-4 bg-[#1e2f3b] lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center space-x-2">
            <Icons.PaperAirplaneIcon className="h-5 w-5 text-white" />
            <p className="text-lg  text-white mr-4">Signup For News Letter</p>
          </div>

          <div className="mt-3 w-[70vw] flex rounded bg-white  justify-between  lg:mt-0 md:w-[30vw] md:min-w-[400px]  overflow-hidden">
            <input
              placeholder="Search me"
              className="py-[5px] rounded outline-none px-6 text-zinc-500 w-[50vw] md:w-[33vw]"
            />
            <div className="bg-green-600 flex items-center justify-center px-4 min-w-[60px] cursor-pointer text-white">
              Subscribe
            </div>
          </div>
        </div>

        <div className="bg-[#1e2f3b]">
          <footer className="w-full bg-[#1e2f3b] p-8">
            <div>
           
                <div className="grid grid-cols-1 gap-y-2   xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">
                  <div>
                    <div>
                      <h4 className="w-full text-2xl font-bold text-white mt-4">
                        Services
                      </h4>
                      <p className="text-zinc-500 my-2">Market Analysis</p>
                      <p className="text-zinc-500 my-2">Accounting Advisor</p>
                      <p className="text-zinc-500 my-2">General Consutancy</p>
                      <p className="text-zinc-500 my-2">Structured Assesment</p>
                    </div>
                    <div className="flex w-[150px]  space-x-2 py-2">
                      <div className="bg-zinc-700 min-w-[30px] min-h-[30px] rounded-full flex justify-center items-center">
                        <TfiTwitter size={19} className="text-gray-400"/>
                      </div>
                      <div className="bg-zinc-700 rounded-full min-w-[30px] min-h-[30px] flex justify-center items-center">
                      <TfiFacebook size={19} className="text-gray-400"/>
                      </div>
                      <div className="bg-zinc-700 rounded-full min-w-[30px] min-h-[30px] flex justify-center items-center">
                      <TfiPinterest size={19} className="text-gray-400"/>
                      </div>
                      <div className="bg-zinc-700 rounded-full min-w-[30px] min-h-[30px] flex justify-center items-center">
                      <TfiInstagram size={19} className="text-gray-400"/>
                      </div>
                      <div className="bg-zinc-700 rounded-full min-w-[30px] min-h-[30px] flex justify-center items-center">
                      <TfiYoutube size={19} className="text-gray-400"/>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="w-full text-2xl font-bold text-white mt-4">
                      Services
                    </h4>
                    <p className="text-zinc-500 my-2">Market Analysis</p>
                    <p className="text-zinc-500 my-2">Accounting Advisor</p>
                    <p className="text-zinc-500 my-2">General Consutancy</p>
                    <p className="text-zinc-500 my-2">Structured Assesment</p>
                  </div>

                  <div className="">
                    <h4 className="w-full text-2xl font-bold text-white mt-4">
                      Discover
                    </h4>
                    <p className="text-zinc-500 my-2">About Us</p>
                    <p className="text-zinc-500 my-2">Contact Us</p>
                    <p className="text-zinc-500 my-2">Terms & Conditions</p>
                    <p className="text-zinc-500 my-2">Policies</p>
                  </div>

                  <div>
                    <h4 className="w-full text-2xl font-bold text-white mt-4">
                      Resources
                    </h4>
                    <p className="text-zinc-500 my-2">Security</p>
                    <p className="text-zinc-500 my-2">Global</p>
                    <p className="text-zinc-500 my-2">Charts</p>
                    <p className="text-zinc-500 my-2">Privacy</p>
                  </div>

                  <div>
                    <h4 className="w-full text-2xl font-bold text-white mt-4">
                      Resources
                    </h4>
                    <p className="text-zinc-500 my-2">Security</p>
                    <p className="text-zinc-500 my-2">Global</p>
                    <p className="text-zinc-500 my-2">Charts</p>
                    <p className="text-zinc-500 my-2">Privacy</p>
                  </div>
        
              </div>
            </div>

            <div className="md:flex md:items-center md:mt-14 md:justify-start">
              <p className="text-zinc-500 my-8">
                Copyright ©2023 All rights reserved | Ecommerce and Blog made with
                &#128420; by <span className="text-green-600">Chima</span>
              </p>
    
            </div>
          </footer>
        </div>
      </div>
      }
    </>
  );
};

export default Footer;
