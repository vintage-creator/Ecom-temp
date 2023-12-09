import React, { useContext } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { FiMinimize2 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import myGlobalContext from "../context";

const CartComponent = () => {
  const {
    selectedItems,
    roundNum,
    totalQty,
    setCartOpen,
    subTotal,
    IncreaseUniqueCount,
    DecreaseUniqueCount,
    deleteCartItem,
    checkoutHandler,
  } = useContext(myGlobalContext);
  // console.log("subTotal", subTotal);
  // console.log("selectedItems", selectedItems);
  // const [quantityInput,setQuantityInput] = useState()

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 fixed 
      top-[230px] md:top-[180px] lg:top-[115px] left-0 right-0 bottom-0 z-[99]  "
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="w-full bg-white  rounded overflow-y-scroll">
        <div className="w-full p-4 flex justify-end cursor-pointer">
          <FiMinimize2
            size={24}
            className="text-[#10181f]"
            onClick={() => setCartOpen(false)}
          />
        </div>

        <div className="lg:p-4 rounded-lg bg-[#ffffff] border-b-2 border-[#10181f] px-4 lg:px-20 ">
          <div className="flex justify-between">
            <p className="text-[#10181f] font-semibold">Sub-Total</p>
            <p className="text-[#10181f] font-semibold">
              ₦{roundNum(subTotal).toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#cad3df7b]">
            <p className="text-[#10181f] font-semibold">VAT</p>
            <p className="text-[#10181f] font-semibold">₦650</p>
          </div>
          <div className="flex justify-between mt-4  mb-6 gap-2">
            <p className="text-[#10181f] text-lg font-semibold lg:text-2xl">TOTAL:</p>
            <p className="text-[#10181f] text-lg font-semibold lg:text-2xl">
              ₦{roundNum(subTotal + 650).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="p-4">
          {totalQty === 0 ? (
            <p className="font-semibold track-wider">
              Continue shopping, your shopping cart is empty.
            </p>
          ) : totalQty === 1 ? (
            <p className="font-semibold track-wider">
              {totalQty} item in your shopping cart, still look around.
            </p>
          ) : totalQty === 2 ? (
            <p className="font-semibold track-wider">
              {totalQty} items in your shopping cart, you still need to look
              around.
            </p>
          ) : (
            <p className="font-semibold track-wider">
              {totalQty} items in your shopping cart.
            </p>
          )}
        </div>

        <div className=" overflow-y-scroll h-[250px]">
          {selectedItems.length > 0
            ? selectedItems.map((items) => {
                console.log(
                  "itemprice",
                  items.price,
                  "itemqty",
                  items.quantity
                );
                return (
                  <div className="p-4 flex justify-between " key={items.id}>
                    <div
                      className="w-[30%]  bg-cover bg-center h-[200px] md:h-[200px] rounded-xl"
                      style={{ backgroundImage: `url(${items.image})` }}
                    ></div>
                    <div className="flex flex-wrap w-[60%] ">
                      <div className="w-full flexflex-wrap ">
                        <p className="text-sm font-semibold text-dark">
                          {items.title}
                        </p>
                        <p>₦{items.price.toLocaleString()}</p>
                      </div>
                      <div className="w-[30%] flex items-center ">
                        <div className="pl-2 border-[1px] rounded-xl border-gray-500 w-[90%]">
                          {/* {uniqueCount(items.id)} */}
                          {items.quantity}
                        </div>

                        <div className="w-[50%] ">
                          <div className="flex justify-center items-center   mb-[2px] rounded">
                            <AiFillPlusSquare
                              size={24}
                              className="text-[#10181f]"
                              onClick={() => IncreaseUniqueCount(items)}
                            />
                          </div>
                          <div className=" flex justify-center items-center   rounded">
                            <AiFillMinusSquare
                              size={24}
                              className="text-[#10181f]"
                              onClick={() => DecreaseUniqueCount(items)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <MdDeleteForever
                        size={24}
                        className="text-[#10181f]"
                        onClick={() => deleteCartItem(items)}
                      />
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        <div className="w-full flex justify-center my-[3px]">
          <div
            className="flex justify-center items-center bg-[#201f1f] text-white rounded-xl w-[40%] h-[50px] cursor-pointer"
            onClick={checkoutHandler}
          >
            <p className="tracking-wider font-semibold">Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
