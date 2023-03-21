import React, { useCallback, useEffect, useState } from "react";
const myGlobalContext = React.createContext();

const Provider = ({ children }) => {
  // =========>>> STORE FUNCTIONS STARTS HERE
  const [countCartItems, setCountCartItems] = useState(0);
  const [selectedItems, SetSelectedItems] = useState([]);
  const [runme, setRunme] = useState(false);
  const [books, setBooks] = useState([]);


  // const cartCount = ()=>{
    
  //   if(selectedItems.length > 0){
  //      const allCount = selectedItems.map((x) => x.quantity).reduce((a,b)=>  a + b,0)
  //     // console.log(allCount,"upper count")
  //     return allCount
  //   }
    
  //  }
  // =========>>> STORE FUNCTIONS ENDS HERE

  //=========>>> BLOG STARTS FUNCTIONS HERE
  const [openAndClose, setOpenAndClose] = useState("hidden");
  const [openAndClose2, setOpenAndClose2] = useState("hidden");
  const [formButton, setFormButton] = useState("hidden");
  const [loadData, setLoadData] = useState([]);
  const [loadData2, setLoadData2] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [spinner2, setSpinner2] = useState(false);
  const [deleteMe, deleteRerender] = useState(false);
  const [postID, setPostID] = useState({});
  const [detailPageID, setDetailPageID] = useState({});
  const [data, setUserData] = useState({
    title: "",
    image: "",
    date: "",
    desc: "",
  });
  const [data2, setUserData2] = useState({
    title: "",
    image: "",
    desc: "",
    date: "",
  });

  const getPostData = useCallback(() => {
    const { id, title, image, desc, date } = postID;
    setUserData2({
      title: `${title}`,
      image: `${image}`,
      desc: `${desc}`,
      date: `${date}`,
    });
  }, [postID]);

  useEffect(() => {
    getPostData();
  }, [openAndClose2, getPostData]);

  useEffect(() => {
    Items();
    console.log(
      openAndClose,
      "**** ",
      openAndClose2,
      "**** ",
      deleteMe,
      "close the hole2222"
    );
  }, [openAndClose, openAndClose2, deleteMe]);

  const Items = () => {
    const getPostData = localStorage.getItem("post")
      ? JSON.parse(localStorage.getItem("post"))
      : [];

    setLoadData(getPostData);
  };

  const deleteHandler = (id) => {
    const getPostData = JSON.parse(localStorage.getItem("post"));

    const newData = getPostData.filter((items) => items.id !== id);
    localStorage.setItem("post", JSON.stringify(newData));

    deleteRerender((prev) => !prev);
  };
  // =========>>> BLOG FUNCTIONS ENDS HERE

  // =========>>> STORE VALUES STARTS HERE
  const store = {
    openAndClose,
    setOpenAndClose,
    loadData,
    setLoadData,
    spinner,
    setSpinner,
    deleteHandler,
    openAndClose2,
    setOpenAndClose2,
    spinner2,
    setSpinner2,
    loadData2,
    setLoadData2,
    setPostID,
    postID,
    data,
    setUserData,
    getPostData,
    data2,
    setUserData2,
    detailPageID,
    setDetailPageID,
    formButton,
    setFormButton,
    // =========>>> BLOG VALUES ENDS HERE

    // =========>>> STORE VALUES STARTS HERE
    selectedItems,
    SetSelectedItems,
    books,
    setBooks,
    runme,
    setRunme,
    countCartItems, setCountCartItems
    // =========>>> STORE VALUES ENDS HERE
  };

  return (
    <myGlobalContext.Provider value={store}>
      {children}
    </myGlobalContext.Provider>
  );
};
export { Provider };
export default myGlobalContext;
