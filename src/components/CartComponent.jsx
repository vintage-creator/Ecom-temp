import React, { useContext } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import myGlobalContext from "../context";



const CartComponent = () => {
    const {selectedItems} = useContext(myGlobalContext)
  return (
    <div className="fixed left-0 top-0 z-30 ">
      <div className="bg-white rounded-2xl w-[100vw] md:w-[50vw]">
        <div className="p-4   rounded-2xl bg-[rgb(16,24,31)]">
          <div className="flex justify-between">
            <p className="text-white">Sub-Total</p>
            <p className="text-white">100</p>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#293948]">
            <p className="text-white">Shipping</p>
            <p className="text-white">10</p>
          </div>
          <div className="flex justify-between mt-4  mb-6">
            <p className="text-white font-bold">Total</p>
            <p className="text-white font-bold text-lg">217.90</p>
          </div>
        </div>

        <div className="p-4">
          <p>3 items in your shopping cart</p>
        </div>
   <div className=" overflow-y-scroll">
   {selectedItems.length > 0
        ?
      selectedItems.map((items)=>{
        return(
            <div className="p-4 flex justify-between ">
            <div
              className="w-[30%]  bg-cover bg-center h-[100px] md:h-[100px] rounded-xl"
              style={{ backgroundImage: `url(${items.image})` }}
            ></div>
            <div className="flex flex-wrap w-[40%] ">
              <div className="w-full flexflex-wrap ">
                <p>Learning Python</p>
                <p>A.J Thompson</p>
                <p>234</p>
              </div>
              <div className="flex items-center">
                <div className=" w-[20%]">
                  <input
                    className="pl-2 border-[1px] rounded-xl border-gray-500 w-[90%]"
                    style={{ outline: "unset" }}
                  />
                </div>
                <div className="w-[10%] ">
                  <div className="flex justify-center items-center   mb-[2px] rounded">
                   <AiFillPlusSquare
                   size={24}
                   />
                  </div>
                  <div className=" flex justify-center items-center   rounded">
                  <AiFillMinusSquare
                   size={24}
                   />
                  </div>
                </div>
              </div>
            </div>
            <div>
            <MdDeleteForever
                   size={24}
                   />
            
            </div>
          </div>
        )
      })
      :""
    }
   </div>

      <div className="w-full flex justify-center">
      <div className="flex justify-center items-center bg-[#201f1f] text-white rounded-xl w-[40%] h-[50px]">
            <p>Checkout</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartComponent;
