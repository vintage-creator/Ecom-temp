import React, { useCallback, useEffect } from "react";
import { BiCartDownload } from "react-icons/bi";
import myGlobalContext from "../context";
import { useContext } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip'
const allBooks = [
  {
    quantity: 0,
    id: 1,
    title: "The HP ZBOOK",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701129571/WhatsApp_Image_2023-11-22_at_08.57.05_33416a55_lf39a8.jpg",
    price: 330000,
    seller: "Perfect Computers",
    description:
      "The HP ZBOOK 15 G3 is a powerful laptop featuring an Intel Core i7 processor, 256GB storage, 8GB RAM, and a 4GB dedicated NVIDIA graphics card. This high-performance device is designed to meet the demands of professional users, offering robust computing capabilities and efficient multitasking.",
    preview:
      "Explore the capabilities of the HP ZBOOK 15 G3, equipped with an Intel Core i7 processor, 256GB storage, and 8GB RAM. The inclusion of a 4GB dedicated NVIDIA graphics card ensures smooth graphics performance, making it an ideal choice for professionals in need of reliable computing power.",
  },
  {
    quantity: 0,
    id: 2,
    title: "HP Elitebook 840 G3",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701133564/WhatsApp_Image_2023-11-22_at_08.58.49_f7cd9751_eu1vvb.jpg",
    price: 165000,
    seller: "Perfect Computers",
    description:
      "The HP Elitebook 840 G3 6th Gen is a sleek and efficient laptop featuring an Intel Core i5 processor, 256GB storage, and 8GB RAM. With its portable design and reliable performance, this laptop is an excellent choice for professionals seeking a balance between power and mobility.",
    preview:
      "Experience the power of the 6th Gen Intel Core i5 processor in the HP Elitebook 840 G3. Boasting 256GB storage, 8GB RAM, and a price point of ₦165K, this laptop offers a seamless blend of performance and affordability, making it an ideal companion for on-the-go professionals.",
  },
  {
    quantity: 0,
    id: 3,
    title: "HP Elitebook 840 G2",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701133600/WhatsApp_Image_2023-11-22_at_08.58.47_ba1987e4_in0nsg.jpg",
    price: 140000,
    seller: "Perfect Computers",
    description:
      "The HP Elitebook 840 G2 5th Gen is a versatile laptop featuring an Intel Core i5 processor, 500GB storage, and 4GB RAM. Equipped with a convenient keyboard light, this laptop offers a balance of performance and functionality at a competitive price of ₦140K.",
    preview:
      "Enhance your computing experience with the HP Elitebook 840 G2 5th Gen. With its powerful Intel Core i5 processor, ample 500GB storage, and 4GB RAM, this laptop is designed for both efficiency and convenience. The added keyboard light feature further elevates its usability, making it a smart choice for users seeking a reliable and feature-rich device.",
  },
  {
    quantity: 0,
    id: 4,
    title: "HP Elitebook 830 G5",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701133787/WhatsApp_Image_2023-11-22_at_08.58.47_778c6b8d_ztlwm4.jpg",
    price: 250000,
    seller: "Perfect Computers",
    description:
      "The HP Elitebook 830 G5 8th Gen is a high-performance laptop powered by an Intel Core i5 processor, featuring a 256GB storage capacity and 8GB of RAM. With a sleek design and robust specifications, this laptop is priced at ₦250K, offering a compelling blend of power and portability.",
    preview:
      "Experience seamless productivity with the HP Elitebook 830 G5 8th Gen. This laptop, driven by an Intel Core i5 processor, boasts a generous 256GB storage and 8GB RAM. Its stylish design and powerful specifications make it a reliable companion for users seeking a balance between performance and mobility. Priced at ₦250K, it delivers exceptional value for those in search of a premium computing experience.",
  },
  {
    quantity: 0,
    id: 5,
    title: "HP Elitebook folio 1040 G3",
    image: "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701134014/WhatsApp_Image_2023-11-22_at_08.58.48_7fd84008_xgda5h.jpg",
    price: 215000,
    seller: "Perfect Computers",
    description:
      "The HP Elitebook Folio 1040 G3 6th Gen is a sophisticated laptop featuring an Intel Core i7 processor, 256GB storage, and 8GB of RAM. With an added keyboard light for enhanced visibility, this laptop is priced at ₦215K, offering a powerful computing experience with a touch of elegance.",
    preview:
      "Elevate your computing experience with the HP Elitebook Folio 1040 G3 6th Gen. Powered by an Intel Core i7 processor, this laptop delivers robust performance with a spacious 256GB storage and 8GB RAM. The inclusion of a keyboard light enhances usability in various environments.",
  },
  {
    quantity: 0,
    id: 6,
    title: "Lenovo X230i",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701134852/WhatsApp_Image_2023-11-22_at_08.58.48_56d634ab_fcc0af.jpg",
    price: 100000,
    seller: "Perfect Computers",
    description:
      "The Lenovo X230i is a reliable laptop equipped with an Intel Core i3 processor, 500GB storage, and 4GB of RAM. Priced at ₦100K, this laptop offers a balance of performance and affordability, making it a suitable choice for everyday computing needs.",
    preview:
      "Experience dependable computing with the Lenovo X230i. Powered by an Intel Core i3 processor, this laptop provides smooth performance, backed by a generous 500GB storage and 4GB RAM. With a reasonable price tag of ₦100K, it's an excellent option for users seeking a budget-friendly yet capable device for their daily tasks.",
  },
  {
    quantity: 0,
    id: 7,
    title: "Lenovo Thinkpad X250",
    image: "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701147688/Lenovo_thinkpad_x250_q9apfr.jpg",
    price: 130000,
    seller: "Perfect Computers",
    description:
      "The Lenovo ThinkPad X250 is a versatile laptop featuring an Intel Core i5 processor, 500GB storage, and 4GB of RAM. Priced at ₦130K, it combines reliable performance with a portable design, making it suitable for professionals and students alike.",
    preview:
      "Enhance your productivity with the Lenovo ThinkPad X250. Powered by an Intel Core i5 processor, this laptop offers a balance of power and efficiency. With a spacious 500GB storage and 4GB RAM, it's equipped to handle your computing needs.",
  },
  {
    quantity: 0,
    id: 8,
    title: "HP Elitebook 840 G5",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701147966/WhatsApp_Image_2023-11-22_at_08.58.48_9cd9741f_esarek.jpg",
    price: 210000,
    seller: "Perfect Computers",
    description:
      "The HP EliteBook 840 G5, 7th Gen, is a powerful laptop with an Intel Core i5 processor, 256GB storage, and 8GB of RAM. It features a keyboard light for enhanced usability and is priced at ₦210K, making it a compelling choice for users seeking performance and functionality.",
    preview:
      "Experience the robust performance of the HP EliteBook 840 G5, 7th Gen, equipped with an Intel Core i5 processor. With a generous 256GB storage and 8GB RAM, this laptop ensures seamless multitasking and efficient storage. The added convenience of a keyboard light enhances usability in various environments.",
  },
  {
    quantity: 0,
    id: 9,
    title:
      "HP Elitebook 840 G4",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701148252/WhatsApp_Image_2023-11-22_at_08.58.49_d2558902_f2y8tp.jpg",
    price: 190000,
    seller: "Perfect Computers",
    description:
      "The HP EliteBook 840 G4, 7th Gen, is a sophisticated laptop featuring an Intel Core i5 processor, 256GB storage, and 8GB of RAM. With a sleek design and powerful specifications, this laptop is priced at ₦190K, making it an attractive choice for users seeking a blend of style and performance.",
    preview:
      "Discover the elegance and power of the HP EliteBook 840 G4, 7th Gen. Driven by an Intel Core i5 processor, this laptop ensures smooth and efficient performance. The spacious 256GB storage and 8GB RAM offer ample space for files and seamless multitasking. ",
  },
  {
    quantity: 0,
    id: 10,
    title: "The HP 15",
    image: "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162415/WhatsApp_Image_2023-11-28_at_05.45.50_dcaf8379_qdmtei.jpg",
    price: "Call: 07033251356",
    seller: "Perfect Computers",
    description:
      "Experience powerful performance and intuitive computing with the HP 15 Touchscreen Laptop. Featuring an Intel Core i5 processor, 12GB RAM, and a spacious 1TB HDD, this laptop delivers seamless multitasking and ample storage for your files. The responsive touchscreen and Windows 10 provide a user-friendly interface for enhanced productivity and entertainment.",
    preview:
      "HP 15 Touchscreen Laptop with Intel Core i5, 10th Gen, 12GB RAM, and 1TB HDD. Explore a responsive touchscreen experience and enjoy powerful computing on Windows 10. Ideal for multitasking and storing all your files.",
  },
  {
    quantity: 0,
    id: 11,
    title: "PS5 Consoles",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162440/WhatsApp_Image_2023-11-28_at_05.45.02_be116cd3_doeuge.jpg",
    price: "Call: 07033251356",
    seller: "Perfect Computers",
    description:
      "Immerse yourself in the next generation of gaming with the Sony Playstation 5 Standard Edition Console. Experience stunning graphics, lightning-fast loading times, and innovative features that redefine gaming. This console delivers powerful performance, a sleek design, and a vast library of games for an unparalleled gaming experience.",
    preview:
      "Sony Playstation 5 Standard Edition Console - Unleash the power of next-gen gaming with cutting-edge graphics and lightning-fast performance. Immerse yourself in a sleek design and explore a vast gaming library for an unparalleled gaming adventure.",
  },
  {
    quantity: 0,
    id: 12,
    title: "iPhone 14 Pro 128GB/256GB",
    image: "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162454/WhatsApp_Image_2023-11-27_at_20.45.28_fb9bbb09_ryyq3a.jpg",
    price: "Call: 07033251356",
    seller: "Perfect Computers",
    description:
      "Discover the pinnacle of smartphone innovation with the Apple iPhone 14 Pro. This powerful device combines cutting-edge technology, stunning design, and exceptional performance. Capture life's moments with an advanced camera system, enjoy a brilliant display, and experience the seamless integration of iOS for a truly premium mobile experience.",
    preview:
      "Experience the epitome of smartphone excellence with expanded storage for all your needs. Enjoy advanced camera capabilities, a stunning display, and the seamless performance of iOS.",
  },
  {
    quantity: 0,
    id: 13,
    title: "iPhone 13 Pro Max 128GB/256GB/512GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162477/WhatsApp_Image_2023-11-27_at_20.45.17_6cc24f29_mphchf.jpg",
    price: "Call: 07033251356",
    seller: "Perfect Computers",
    description:
      "Unleash the power of technology with the iPhone 13 Pro Max. This flagship device boasts an impressive camera system, stunning display, and powerful performance. Choose from ample storage options to suit your needs and elevate your mobile experience to new heights.",
    preview:
      "Take your smartphone experience to the next level with increased storage capacity. Store more media, apps, and files without compromising on performance.",
  },
  {
    quantity: 0,
    id: 14,
    title: "iPhone 11 64GB/128GB",
    image: "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162616/WhatsApp_Image_2023-11-27_at_20.45.08_f7ae73d0_ulcr0n.jpg",
    price: "Call: 07033251356",
    seller: "Perfect Computers",
    description:
      "Discover innovation and performance with the Apple iPhone 11. This iconic device combines cutting-edge features with sleek design. Capture stunning photos, enjoy immersive displays, and experience seamless performance in the palm of your hand.",
    preview:
      "Elevate your mobile experience with ample storage for apps, photos, and more. Capture memories and stay connected with the power of Apple's renowned technology.",
  },
  {
    quantity: 0,
    id: 15,
    title: "Apple iphone 8/8+ - 64/256GB",
    image: "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162641/8plus_and_8_glass_back_big.jpg.large_dxvoxq.jpg",
    price: "Call: 07033251356",
    seller: "Perfect Computers",
    description:
      "Experience timeless elegance and powerful performance with the Apple iPhone 8 and 8+. These iconic smartphones seamlessly blend premium design with advanced features. Enjoy stunning visuals, responsive capabilities, and the reliability of Apple's craftsmanship.",
    preview:
      "Unleash the potential of a compact powerhouse. The 64GB and 256GB variants offer ample storage for your essentials, delivering a smooth and responsive user experience for everyday tasks and multimedia enjoyment.",
  },
  {
    quantity: 0,
    id: 16,
    title: "iphone X/XS/XR/XS Max - 64/128/256/512GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162668/iphone-x_tbbxsy.png",
      price: "Call: 07033251356",
      seller: "Perfect Computers",
    description:
      "Immerse yourself in the brilliance of Apple innovation with the iPhone X, XS, XR, and XS Max. Crafted with precision and loaded with cutting-edge technology, these iconic iPhones redefine the smartphone experience. Elevate your daily interactions with stunning displays, powerful performance, and an unmatched user interface.",
    preview:
      "Embrace color and performance with these iPhone series. Enjoy the Liquid Retina display, powerful A12 Bionic chip, and a single-lens camera that captures stunning portraits and immersive AR experiences.",
  },
  {
    quantity: 0,
    id: 17,
    title: "iphone 12/12 Pro/12 Pro Max - 64/128/256/512GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162688/IPhone12-64gb-ss_n6jaky.jpg",
      price: "Call: 07033251356",
      seller: "Perfect Computers",
    description:
      "Introducing the Apple iPhone 12 series — a masterpiece of design, performance, and innovation. Elevate your smartphone experience with the iPhone 12, 12 Pro, and 12 Pro Max. Immerse yourself in a world of cutting-edge technology, stunning visuals, and unparalleled user satisfaction.",
    preview:
      "Redefine your daily moments with the iPhone 12 series. This device features a Ceramic Shield front cover, A14 Bionic chip, and a dual-camera system for capturing every detail with precision.",
  },
  {
    quantity: 0,
    id: 18,
    title: "iphone 7/7 Plus - 32/128/256GB",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162704/iphone7_kbvsx8.jpg",
      price: "Call: 07033251356",
      seller: "Perfect Computers",
    description:
      "Discover the timeless elegance and powerful performance of the Apple iPhone 7 series. Immerse yourself in a world of innovation and sophistication with the iPhone 7 and 7 Plus. These iconic devices blend style with substance, providing an exceptional user experience.",
    preview:
      "Sleek and stylish, the iPhone 7 series offers a 4.7-inch Retina display, A10 Fusion chip, and a 12MP camera. Experience seamless performance and impressive features in a compact design.",
  },
  {
    quantity: 0,
    id: 19,
    title: "JBL Speakers",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162725/jbl-hero_b2aabx.webp",
      price: "Call: 07033251356",
      seller: "Perfect Computers",
    preview:
      "Elevate your audio experience with JBL Speakers, where cutting-edge technology meets superior sound quality. Explore a range of speakers designed to deliver immersive and crystal-clear audio for every occasion.",
      description:
      "Immerse yourself in the rich and powerful sound of JBL Speakers. From portable Bluetooth speakers for on-the-go music enthusiasts to premium home audio systems, JBL offers a diverse lineup to suit your lifestyle. Experience audio excellence with JBL, where innovation meets unparalleled performance.",
  },
  {
    quantity: 0,
    id: 20,
    title: "Apple iWatches",
    image:
      "https://res.cloudinary.com/dcoxo8snb/image/upload/v1701162745/iwatch_uikysi.png",
      price: "Call: 07033251356",
      seller: "Perfect Computers",
    description:
      "Elevate your daily routine with Apple iWatches, curated to complement your lifestyle. From fitness tracking to seamless integration with your iPhone, these smartwatches offer a comprehensive suite of features. Stay connected, stay active, and make a statement with the perfect fusion of innovation and elegance - Apple iWatches.",
    preview:
      "Discover the pinnacle of wearable technology with Apple iWatches. Seamlessly blending style and functionality, Apple iWatches redefine the way you experience time. Explore a collection that harmonizes cutting-edge features, precision engineering, and iconic design.",
  },
];

const StoreComponent = () => {
  const { selectedItems, SetSelectedItems, books, setBooks,runme, setRunme,countCartItems, uniqueCount ,} =
    useContext(myGlobalContext);

  const loadData =useCallback( ()=>{
    setBooks(allBooks)
  },[setBooks])


  useEffect(()=>{
    loadData()
  }, [loadData,runme])
  
  const addToCartHandler = (items) => {
    
    if (selectedItems.length === 0) {
      SetSelectedItems([
        {
          id: items.id,
          title: items.title,
          image: items.image,
          price: items.price,
          seller: items.seller,
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
            seller: items.seller,
            quantity: items.quantity + 1,
          },
          ...selectedItems,
        ]);
      }
    }
    
    
    setRunme(prev => !prev)
  };
  
  console.log(countCartItems,"minimee")

  // Trucate text fuction starts here
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  // Truncate text function ends here

  return (
    <>
      <div className="grid gap-2 p-2 grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:p-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
        {books.map((items) => {
          return (
            <div
              className="overflow-hidden  bg-white   rounded pb-2"
              key={items.id}
              style={{
                boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
              }}
            >
              <div
                className="w-[100%] h-[200px] bg-cover bg-center bg-no-repeat mb-2 "
                style={{ backgroundImage: `url("${items.image}")` }}
              ></div>

              <div className=" h-[380px] w-[90%]  ml-4  relative">
                <p className="mb-4 text-left tracking-wider  uppercase text-[0.9rem] lg:text-[1rem] md:text-[0.8rem]">
                  <b>{truncateText(items.title, 69)}</b>
                </p>
                <div>
                  <p className="my-4 text-zinc-700">
                    {truncateText(items.description, 250)}
                  </p>
                </div>
                <div className="absolute bottom-0 w-full ">
                  <div className="pl-2 w-[90%] ">
                    Seller : {items.seller}
                  </div>
                  <div className="ml-2 my-2 bg-yellow-500 rounded flex justify-center w-[35%] h-[30px]">
                    {items.price}
                  </div>
                  <div className="w-full flex justify-end ">
                    <div className="rounded-full h-6 w-6 bg-gray-200 flex justify-center items-center p-[5px] ">
                      {items.quantity !== 0 ? ""
                      :
                       uniqueCount(items.id)
                     
                      }
                    </div>
                    <div
                      className="rounded-full bg-gray-200 flex justify-center items-center p-2 hover:bg-[unset]"
                      onClick={() => {
                        addToCartHandler(items);
                      }}
                      data-tooltip-id={`${items.id}`} data-tooltip-content="ADD TO CART"
                    >
                      <ReactTooltip id={`${items.id}`} type="success" 
                      style={{ backgroundColor: "rgba(22,163,74,0.9)", color: "#fff", fontWeight:"bold", letterSpacing:"1px"}}
                      />
                      <BiCartDownload size={30} className="text-green-600" />
               
                    </div>
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
