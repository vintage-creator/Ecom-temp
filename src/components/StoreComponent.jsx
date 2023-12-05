import React, { useCallback, useEffect } from "react";
import { BiCartDownload } from "react-icons/bi";
import myGlobalContext from "../context";
import { useContext } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
const allBooks = [
  {
    quantity: 0,
    id: 1,
    title: "The HP ZBOOK",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701129571/WhatsApp_Image_2023-11-22_at_08.57.05_33416a55_lf39a8.jpg",
    price: "₦330,000",
    description:
      "The HP ZBOOK 15 G3 is a powerful laptop featuring an Intel Core i7 processor, 256GB storage, 8GB RAM, and a 4GB dedicated NVIDIA graphics card.",
  },
  {
    quantity: 0,
    id: 2,
    title: "HP Elitebook 840 G3",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701133564/WhatsApp_Image_2023-11-22_at_08.58.49_f7cd9751_eu1vvb.jpg",
    price: "₦165,000",
    description:
      "The HP Elitebook 840 G3 6th Gen is a sleek and efficient laptop featuring an Intel Core i5 processor, 256GB storage, and 8GB RAM.",
  },
  {
    quantity: 0,
    id: 3,
    title: "HP Elitebook 840 G2",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701133600/WhatsApp_Image_2023-11-22_at_08.58.47_ba1987e4_in0nsg.jpg",
    price: "₦140,000",
    description:
      "The HP Elitebook 840 G2 5th Gen is a versatile laptop featuring an Intel Core i5 processor, 500GB storage, and 4GB RAM. ",
  },
  {
    quantity: 0,
    id: 4,
    title: "HP Elitebook 830 G5",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701133787/WhatsApp_Image_2023-11-22_at_08.58.47_778c6b8d_ztlwm4.jpg",
    price: "₦250,000",
    description:
      "The HP Elitebook 830 G5 8th Gen is a high-performance laptop powered by an Intel Core i5 processor, featuring a 256GB storage capacity and 8GB of RAM.",
  },
  {
    quantity: 0,
    id: 5,
    title: "HP Elitebook folio 1040 G3",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701134014/WhatsApp_Image_2023-11-22_at_08.58.48_7fd84008_xgda5h.jpg",
    price: "₦215,000",
    description:
      "The HP Elitebook Folio 1040 G3 6th Gen is a sophisticated laptop featuring an Intel Core i7 processor, 256GB storage, and 8GB of RAM.",
  },
  {
    quantity: 0,
    id: 6,
    title: "Lenovo X230i",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701134852/WhatsApp_Image_2023-11-22_at_08.58.48_56d634ab_fcc0af.jpg",
    price: "₦100,000",
    description:
      "The Lenovo X230i is a reliable laptop equipped with an Intel Core i3 processor, 500GB storage, and 4GB of RAM.",
  },
  {
    quantity: 0,
    id: 7,
    title: "Lenovo Thinkpad X250",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701147688/Lenovo_thinkpad_x250_q9apfr.jpg",
    price: "₦130,000",
    description:
      "The Lenovo ThinkPad X250 is a versatile laptop featuring an Intel Core i5 processor, 500GB storage, and 4GB of RAM.",
  },
  {
    quantity: 0,
    id: 8,
    title: "HP Elitebook 840 G5",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701147966/WhatsApp_Image_2023-11-22_at_08.58.48_9cd9741f_esarek.jpg",
    price: "₦210,000",
    description:
      "The HP EliteBook 840 G5, 7th Gen, is a powerful laptop with an Intel Core i5 processor, 256GB storage, and 8GB of RAM.",
  },
  {
    quantity: 0,
    id: 9,
    title: "HP Elitebook 840 G4",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701148252/WhatsApp_Image_2023-11-22_at_08.58.49_d2558902_f2y8tp.jpg",
    price: "₦190,000",
    description:
      "The HP EliteBook 840 G4, 7th Gen, is a sophisticated laptop featuring an Intel Core i5 processor, 256GB storage, and 8GB of RAM.",
  },
  {
    quantity: 0,
    id: 10,
    title: "The HP 15",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162415/WhatsApp_Image_2023-11-28_at_05.45.50_dcaf8379_qdmtei.jpg",
    price: "Call: 07033251356",
    description:
      "HP 15 Touchscreen Laptop with Intel Core i5, 10th Gen, 12GB RAM, and 1TB HDD.",
  },
  {
    quantity: 0,
    id: 11,
    title: "PS5 Consoles",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162440/WhatsApp_Image_2023-11-28_at_05.45.02_be116cd3_doeuge.jpg",
    price: "Call: 07033251356",
    description:
      "Sony Playstation 5 Standard Edition Console - Unleash the power of next-gen gaming with cutting-edge graphics and lightning-fast performance.",
  },
  {
    quantity: 0,
    id: 12,
    title: "iPhone 14 Pro 128GB/256GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162454/WhatsApp_Image_2023-11-27_at_20.45.28_fb9bbb09_ryyq3a.jpg",
    price: "Call: 07033251356",
    description:
      "Experience the epitome of smartphone excellence with expanded storage for all your needs. Enjoy advanced camera capabilities, a stunning display, and the seamless performance of iOS.",
  },
  {
    quantity: 0,
    id: 13,
    title: "iPhone 13 Pro Max 128GB/256GB/512GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162477/WhatsApp_Image_2023-11-27_at_20.45.17_6cc24f29_mphchf.jpg",
    price: "Call: 07033251356",
    description:
      "Take your smartphone experience to the next level with increased storage capacity. Store more media, apps, and files without compromising on performance.",
  },
  {
    quantity: 0,
    id: 14,
    title: "iPhone 11 64GB/128GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162616/WhatsApp_Image_2023-11-27_at_20.45.08_f7ae73d0_ulcr0n.jpg",
    price: "Call: 07033251356",
    description:
      "Elevate your mobile experience with ample storage for apps, photos, and more. Capture memories and stay connected with the power of Apple's renowned technology.",
  },
  {
    quantity: 0,
    id: 15,
    title: "Apple iphone 8/8+ - 64/256GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162641/8plus_and_8_glass_back_big.jpg.large_dxvoxq.jpg",
    price: "Call: 07033251356",
    description:
      "The 64GB and 256GB variants offer ample storage for your essentials, delivering a smooth and responsive user experience for everyday tasks and multimedia enjoyment.",
  },
  {
    quantity: 0,
    id: 16,
    title: "iphone X/XS/XR/XS Max - 64/128/256/512GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162668/iphone-x_tbbxsy.png",
    price: "Call: 07033251356",
    description:
      "Enjoy the Liquid Retina display, powerful A12 Bionic chip, and a single-lens camera that captures stunning portraits and immersive AR experiences.",
  },
  {
    quantity: 0,
    id: 17,
    title: "iphone 12/12 Pro/12 Pro Max - 64/128/256/512GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162688/IPhone12-64gb-ss_n6jaky.jpg",
    price: "Call: 07033251356",
    description:
      "This device features a Ceramic Shield front cover, A14 Bionic chip, and a dual-camera system for capturing every detail with precision.",
  },
  {
    quantity: 0,
    id: 18,
    title: "iphone 7/7 Plus - 32/128/256GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162704/iphone7_kbvsx8.jpg",
    price: "Call: 07033251356",
    description:
      "Sleek and stylish, the iPhone 7 series offers a 4.7-inch Retina display, A10 Fusion chip, and a 12MP camera.",
  },
  {
    quantity: 0,
    id: 19,
    title: "JBL Speakers",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162725/jbl-hero_b2aabx.webp",
    price: "Call: 07033251356",

    description:
      "Elevate your audio experience with JBL Speakers, where cutting-edge technology meets superior sound quality.",
  },
  {
    quantity: 0,
    id: 20,
    title: "Apple iWatches",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162745/iwatch_uikysi.png",
    price: "Call: 07033251356",
    description:
      "Apple iWatches redefine the way you experience time. Explore a collection that harmonizes cutting-edge features, precision engineering, and iconic design.",
  },
];

const StoreComponent = () => {
  const {
    selectedItems,
    SetSelectedItems,
    books,
    setBooks,
    runme,
    setRunme,
    countCartItems,
    uniqueCount,
  } = useContext(myGlobalContext);

  const loadData = useCallback(() => {
    setBooks(allBooks);
  }, [setBooks]);

  useEffect(() => {
    loadData();
  }, [loadData, runme]);

  const addToCartHandler = (items) => {
    if (selectedItems.length === 0) {
      SetSelectedItems([
        {
          id: items.id,
          title: items.title,
          image: items.image,
          price: items.price,
          quantity: items.quantity + 1,
        },
        ...selectedItems,
      ]);
    } else if (selectedItems.length > 0) {
      const data = selectedItems.findIndex(
        (singleItem) => singleItem.id === items.id
      );
      if (data !== -1) {
        const specific = selectedItems[data];
        specific.quantity = specific.quantity + 1;
      } else if (data === -1) {
        SetSelectedItems([
          {
            id: items.id,
            title: items.title,
            image: items.image,
            price: items.price,
            quantity: items.quantity + 1,
          },
          ...selectedItems,
        ]);
      }
    }

    setRunme((prev) => !prev);
  };

  console.log(countCartItems, "minimee");

  // Trucate text fuction starts here
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <>
      <p className="mb-4 text-left font-bold p-4 text-[1.7rem] lg:text-[1.2rem] md:text-[1.5rem]">
        Our top-selling products
      </p>
      <div className="grid gap-2 p-2 grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:p-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
        {books.map((items) => {
          return (
            <div
              className="overflow-hidden bg-white rounded pb-2"
              key={items.id}
              style={{
                boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
              }}
            >
              <div
                className="w-[100%] h-[300px] md:h-[300px] bg-cover bg-center bg-no-repeat mb-2 "
                style={{ backgroundImage: `url("${items.image}")` }}
              ></div>

              <div className="h-[380px] w-[90%] ml-4 relative">
                <p className="mb-4 text-left tracking-wider uppercase text-[0.9rem] lg:text-[1rem] md:text-[0.8rem]">
                  <b>{truncateText(items.title, 69)}</b>
                </p>
                <div>
                  <p className="my-4 text-zinc-700">
                    {truncateText(items.description, 250)}
                  </p>
                </div>
                <div className="absolute bottom-0 w-full ">
                  <div className="ml-2 my-2 rounded flex justify-center w-[35%] h-[30px]">
                    {items.price}
                  </div>
                  <div className="w-full flex justify-end ">
                    <div className="rounded-full h-6 w-6 bg-gray-200 flex justify-center items-center p-[5px]">
                      {items.quantity !== 0 ? "" : uniqueCount(items.id)}
                    </div>
                    <button
                      className="rounded-full bg-[#222222] text-white flex justify-center items-center p-2"
                      onClick={() => {
                        addToCartHandler(items);
                      }}
                      data-tooltip-id={`${items.id}`}
                      data-tooltip-content="ADD TO CART"
                    >
                      <ReactTooltip
                        id={`${items.id}`}
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
          );
        })}
      </div>
    </>
  );
};

export default StoreComponent;
