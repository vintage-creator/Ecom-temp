import React, { useCallback, useEffect } from "react";
import { BiCartDownload } from "react-icons/bi";
import myGlobalContext from "../context";
import { useContext } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip'
const allBooks = [
  {
    quantity: 0,
    id: 1,
    title: "The DevOps Handbook",
    image:
      "https://d2befjeb7j9tii.cloudfront.net/upload/images/large/11428743.jpg",
    price: 23.98,
    author: "Gene Kim",
    description:
      "This book is a comprehensive guide to implementing DevOps principles in organizations of all sizes. Kim provides practical advice on how to streamline software delivery, increase agility, and improve collaboration between development and operations teams.",
    preview:
      "In this book, Kim covers topics such as continuous integration and deployment, infrastructure as code, and monitoring and logging. He provides case studies from companies like Google, Amazon, and Netflix, and explains how they have successfully implemented DevOps practices.",
  },
  {
    quantity: 0,
    id: 2,
    title: "Effective Java",
    image:
      "https://m.media-amazon.com/images/P/0134685997.01._SCLZZZZZZZ_SX500_.jpg",
    price: 33.99,
    author: "Joshua Bloch",
    description:
      "This book is a guide to writing effective and efficient Java code. Bloch provides practical advice on how to use Java features, libraries, and patterns to write code that is easy to maintain, extend, and debug.",
    preview:
      "In this book, Bloch covers topics such as object creation, classes and interfaces, lambda expressions, and streams. He provides examples of good and bad Java code and explains how to use Java libraries and frameworks like Spring and Hibernate.",
  },
  {
    quantity: 0,
    id: 3,
    title: "Head First Design Patterns",
    image:
      "https://m.media-amazon.com/images/P/B08P3X99QP.01._SCLZZZZZZZ_SX500_.jpg",
    price: 47.99,
    author: "Eric Freeman",
    description:
      "This book is a guide to understanding and using design patterns in software development. Freeman provides practical advice on how to apply patterns to create flexible, reusable, and maintainable software.",
    preview:
      "In this book, Freeman covers patterns such as Singleton, Factory Method, Decorator, and Observer. He provides examples of good and bad design and explains how to use design patterns in Java, C++, and C#.",
  },
  {
    quantity: 0,
    id: 4,
    title: "The Art of Computer Programming",
    image:
      "https://m.media-amazon.com/images/I/410vJZbAZGS._SY393_BO1,204,203,200_.jpg",
    price: 206.99,
    author: "Donald E. Knuth",
    description:
      "This book is a comprehensive guide to computer programming and algorithms. Knuth provides practical advice on how to design and analyze algorithms, and how to implement them efficiently in computer programs.",
    preview:
      "In this book, Knuth covers topics such as fundamental algorithms, sorting and searching, combinatorial algorithms, and graph algorithms. He provides examples of algorithms in several programming languages, including Pascal, C, and assembly language.",
  },
  {
    quantity: 0,
    id: 5,
    title: "The Phoenix Project",
    image: "https://m.media-amazon.com/images/I/51Fi5Fq4u5L.jpg",
    price: "$12.00",
    author: "Gene Kim, Kevin Behr, George Spafford",
    description:
      "The Phoenix Project is a novel that tells the story of a fictional company that is struggling to survive in the face of intense competition and technological disruption. Through the eyes of the main character, we see how the company's IT department is able to transform itself from a liability into a strategic asset.",
    preview:
      "The Phoenix Project is a great book for anyone who wants to learn more about IT management, DevOps, and the principles of agile development. It's a fun read that provides valuable insights into the challenges that modern businesses face, and how they can overcome them with the right approach.",
  },
  {
    quantity: 0,
    id: 6,
    title: "Clean Code",
    image:
      "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 33.71,
    author: "Robert C. Martin",
    description:
      "This book is a guide to writing clean, maintainable code. Martin provides guidelines and best practices for writing code that is easy to read and modify, and that will stand the test of time.",
    preview:
      "In this book, Martin provides practical advice on writing code that is easy to understand and modify. He covers topics such as naming conventions, formatting, and error handling, and provides examples of both good and bad code. The book also includes case studies and examples from real-world projects.",
  },
  {
    quantity: 0,
    id: 7,
    title: "The Pragmatic Programmer: Your Journey To Mastery",
    image: "https://m.media-amazon.com/images/I/51IA4hT6jrL.jpg",
    price: 24.6,
    author: "David Thomas, Andrew Hunt",
    description:
      "This book provides tips and techniques on how to improve your programming skills, from managing complexity to writing code that is easy to maintain.",
    preview:
      "https://www.amazon.com/Pragmatic-Programmer-Journey-Mastery/dp/0135957052",
  },
  {
    quantity: 0,
    id: 8,
    title: "Code Complete: A Practical Handbook of Software Construction",
    image:
      "https://m.media-amazon.com/images/I/51IM3Ywr1yL._SX397_BO1,204,203,200_.jpg",
    price: 37.49,
    author: "Steve McConnell",
    description:
      "This book provides a comprehensive guide to software construction, including design, coding, debugging, and testing.",
    preview:
      "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670",
  },
  {
    quantity: 0,
    id: 9,
    title:
      "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
    image:
      "https://m.media-amazon.com/images/P/1449373321.01._SCLZZZZZZZ_SX500_.jpg",
    price: 40.33,
    author: "Martin Kleppmann",
    description:
      "This book explores the principles and techniques for designing and building large-scale, data-intensive applications.",
    preview:
      "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321",
  },
  {
    quantity: 0,
    id: 10,
    title: "The Clean Coder: A Code of Conduct for Professional Programmers",
    image: "https://m.media-amazon.com/images/I/51VzkJGKrjL.jpg",
    price: 25.75,
    author: "Robert C. Martin",
    description:
      "This book provides guidance on how to be a professional programmer, including topics such as time management, teamwork, and communication.",
    preview:
      "https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073",
  },
  {
    quantity: 0,
    id: 11,
    title: "The Mythical Man-Month: Essays on Software Engineering",
    image:
      "https://m.media-amazon.com/images/P/B00B8USS14.01._SCLZZZZZZZ_SX500_.jpg",
    price: 21.0,
    author: "Frederick P. Brooks Jr.",
    description:
      "This book explores the challenges of managing large software projects, including topics such as project estimation, scheduling, and communication.",
    preview:
      "https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959",
  },
  {
    quantity: 0,
    id: 12,
    title: "The Lean Startup",
    image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    price: 28.05,
    author: "Eric Ries",
    description:
      "This book is a guide to building a successful startup. Ries provides practical advice on how to create a product that customers actually want, and how to build a business that is scalable and sustainable.",
    preview:
      "In this book, Ries introduces the concept of the lean startup, which emphasizes rapid iteration and continuous experimentation. He provides practical advice on how to test your assumptions, measure progress, and pivot when necessary. The book also includes case studies and examples from successful startups.",
  },
  {
    quantity: 0,
    id: 13,
    title: "Cracking the PM Interview",
    image:
      "https://m.media-amazon.com/images/P/0984782818.01._SCLZZZZZZZ_SX500_.jpg",
    price: 34.24,
    author: "Gayle McDowell",
    description:
      "This book is a comprehensive guide to acing the product management interview. McDowell provides practical advice on how to prepare for the interview, what to expect during the interview, and how to answer common interview questions.",
    preview:
      "In this book, McDowell covers topics such as product design, technical skills, and behavioral questions. She provides examples of successful interview answers, as well as tips for networking and negotiating job offers.",
  },
  {
    quantity: 0,
    id: 14,
    title: "Learning Python",
    image: "https://m.media-amazon.com/images/I/41nRJEUxePS.jpg",
    price: 30.49,
    author: "Mark Lutz",
    description:
      "This book is a comprehensive guide to learning the Python programming language. Lutz provides practical advice on how to write Python code, how to use Python libraries, and how to debug Python programs.",
    preview:
      "In this book, Lutz covers topics such as data types, control structures, functions, and classes. He provides examples of Python code and explains how to use Python libraries for scientific computing, web development, and more.",
  },
  {
    quantity: 0,
    id: 15,
    title: "Site Reliability Engineering",
    image: "https://m.media-amazon.com/images/I/51XswOmuLqL.jpg",
    price: 35.99,
    author: "Niall Richard Murphy",
    description:
      "This book is a guide to building and operating large-scale distributed systems. Murphy provides practical advice on how to design, implement, and manage systems that are reliable, scalable, and efficient.",
    preview:
      "In this book, Murphy covers topics such as monitoring, load balancing, incident response, and capacity planning. He provides case studies from companies like Google, Amazon, and LinkedIn, and explains how they have applied site reliability engineering principles to their systems.",
  },
  {
    quantity: 0,
    id: 16,
    title: "Learning JavaScript",
    image:
      "https://m.media-amazon.com/images/P/1491914912.01._SCLZZZZZZZ_SX500_.jpg",
    price: 39.99,
    author: "Ethan Brown",
    description:
      "This book is a comprehensive guide to learning the JavaScript programming language. Brown provides practical advice on how to write JavaScript code, how to use JavaScript frameworks, and how to debug JavaScript programs.",
    preview:
      "In this book, Brown covers topics such as data types, control structures, functions, and objects. He provides examples of JavaScript code and explains how to use popular JavaScript frameworks like Angular and React.",
  },
];

const StoreComponent = () => {
  const { selectedItems, SetSelectedItems, books, setBooks,runme, setRunme,countCartItems, uniqueCount ,} =
    useContext(myGlobalContext);
  // const sliceData = (data, start, end) => {
  //   const newData11 = data.slice(start, end);
  //   return newData11;
  // };


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
          author: items.author,
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
            author: items.author,
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
                  {truncateText(items.title, 69)}
                </p>
                <div>
                  <p className="my-4 text-zinc-700">
                    {truncateText(items.description, 150)}
                  </p>
                </div>
                <div className="absolute bottom-0 w-full ">
                  <div className="pl-2 w-[90%] ">
                    Author : {items.author}
                  </div>
                  <div className="ml-2 my-2 bg-yellow-500 rounded flex justify-center w-[25%] h-[30px]">
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
