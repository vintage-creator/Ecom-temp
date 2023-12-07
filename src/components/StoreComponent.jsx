import React, { useCallback, useEffect } from "react";
import { BiCartDownload } from "react-icons/bi";
import myGlobalContext from "../context";
import { useContext } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { allBooks } from "../utils/data/data";

const StoreComponent = () => {
  const {
    selectedItems,
    SetSelectedItems,
    books,
    setBooks,
    runme,
    setRunme,
    uniqueCount,
  } = useContext(myGlobalContext);

  const loadData = useCallback(() => {
    setBooks(allBooks);
  }, [setBooks]);

  useEffect(() => {
    loadData();
  }, [loadData, runme]);

  const addToCartHandler = (item) => {
    const existingItemIndex = selectedItems.findIndex(
      (singleItem) => singleItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      selectedItems[existingItemIndex].quantity += 1;
    } else {
      SetSelectedItems([
        {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity + 1,
        },
        ...selectedItems,
      ]);
    }

    setRunme((prev) => !prev);
  };

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <>
      <p className="font-bold text-center py-4 text-[1.4rem] md:text-[1.5rem] lg:text-[2rem] leading-8">
        Our Top-Selling Products
      </p>
      <div className="grid gap-2 p-2 grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:p-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
        {books.map((item) => (
          <div
            className="overflow-hidden rounded flex flex-col w-full"
            key={item.id}
            style={{
              boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
            }}
          >
            <div
              className="w-[100%] h-[300px] md:h-[300px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${item.image}")` }}
            ></div>

            <div className=" w-[100%] p-5 flex flex-col justify-between gap-10">
              <div className="flex flex-col">
                <p className="text-left tracking-wider uppercase text-[0.9rem] md:text-[1rem]">
                  <b>{truncateText(item.title, 69)}</b>
                </p>
                <p className="text-zinc-700 mt-4">
                  {truncateText(item.description, 250)}
                </p>
              </div>

              <div className="w-full flex flex-col">
                <div className="my-2 rounded flex font-bold h-[30px]">
                  {typeof item.price === "number"
                    ? `₦${item.price.toLocaleString()}`
                    : item.price}
                </div>
                <div className="flex mt-2">
                  <div className="rounded-full h-6 w-6 bg-gray-200 flex justify-center items-center p-[5px] text-black">
                    {/* {console.log("unique", item)} */}
                    {uniqueCount(item.id)}
                  </div>
                  <button
                    className={`rounded-full bg-[#222222] text-white flex items-center px-4 py-1 font-semibold ${
                      typeof item.price !== "number" &&
                      "cursor-not-allowed opacity-50"
                    }`}
                    onClick={() => addToCartHandler(item)}
                    data-tooltip-id={`${item.id}`}
                    data-tooltip-content="ADD TO CART"
                    disabled={typeof item.price !== "number"}
                  >
                    <ReactTooltip
                      id={`${item.id}`}
                      type="success"
                      style={{
                        backgroundColor: "rgba(22,163,74,0.9)",
                        color: "#fff",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                    />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StoreComponent;
