import React, { useCallback, useEffect, useState } from "react";
const myGlobalContext = React.createContext();

const Provider = ({ children }) => {
  // =========>>> ADMIN FUNCTIONS STARTS HERE
  const [page, setPage] = useState("");
  const [showdelete, setShowDelete] = useState("");
  // =========>>> ADMIN FUNCTIONS ENDS HERE
  // =========>>> STORE FUNCTIONS STARTS HERE
  const [countCartItems, setCountCartItems] = useState(0);
  const [selectedItems, SetSelectedItems] = useState([]);
  const [runme, setRunme] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [moreArticles, setMoreArticles] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const roundNum = (num) => {
    const newNum = num.toFixed(2);
    return newNum;
  };

  const uniqueCount = (id) => {
    const newCount = selectedItems.find((x) => x.id === id);
    if (newCount) {
      return newCount.quantity;
    }
  };

  const IncreaseUniqueCount = (items) => {
    const data = selectedItems.findIndex(
      (singleItem) => singleItem.id === items.id
    );

    const data1 = selectedItems.find(
      (singleItem) => singleItem.id === items.id
    );

    if (data !== -1) {
      const specific = selectedItems[data];
      specific.quantity = specific.quantity + 1;
      // return uniqueCount(items.id)
      console.log(data1, "winner");

      setRunme((prev) => !prev);
    }
  };

  const DecreaseUniqueCount = (items) => {
    const data = selectedItems.findIndex(
      (singleItem) => singleItem.id === items.id
    );

    const data1 = selectedItems.find(
      (singleItem) => singleItem.id === items.id
    );

    if (data !== -1) {
      const specific = selectedItems[data];
      if (specific.quantity > 1) {
        specific.quantity = specific.quantity - 1;
      }
      // return uniqueCount(items.id)
      console.log(data1, "losser");

      setRunme((prev) => !prev);
    }
  };

  const totalQtyFunction = useCallback(() => {
    const data = selectedItems
      .map((x) => x.quantity)
      .reduce((a, b) => a + b, 0);

    return setTotalQty(data);
  }, [selectedItems]);
  useEffect(() => {
    totalQtyFunction();
  }, [runme, totalQtyFunction]);

  const subTotalFunction = useCallback(() => {
    const data = selectedItems
      .map((x) => x.price * x.quantity)
      .reduce((a, b) => a + b, 0);

    return setSubTotal(data);
  }, [selectedItems]);
  useEffect(() => {
    subTotalFunction();
  }, [runme, subTotalFunction]);

  const deleteCartItem = (items) => {
    const data = selectedItems.filter((x) => x.id !== items.id);

    SetSelectedItems(data);
  };

  const checkoutHandler = () => {
    setCartOpen(false);
    setPaymentOpen(true);
  };
  // =========>>> STORE FUNCTIONS ENDS HERE

  //=========>>> BLOG STARTS FUNCTIONS HERE
  const [signupLoginPan,setSignupLoginPan]=useState(true)
  const [componentName, setComponentName] = useState("");

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
    const { title, image, desc, date } = postID;
    setUserData2({
      title: `${title}`,
      image: `${image}`,
      desc: `${desc}`,
      date: `${date}`,
    });
  }, [postID]);
//edit post
  useEffect(() => {
    getPostData();
  }, [runme, getPostData]);

  useEffect(() => {
    Items();
  }, [runme, deleteMe]);

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
    loadData,
    setLoadData,
    spinner,
    setSpinner,
    deleteHandler,

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
    setFormButton,openAndClose2, setOpenAndClose2,
    // =========>>> BLOG VALUES ENDS HERE

    // =========>>> STORE VALUES STARTS HERE
    selectedItems,
    SetSelectedItems,
    books,
    setBooks,
    runme,
    setRunme,
    countCartItems,
    setCountCartItems,
    uniqueCount,
    IncreaseUniqueCount,
    DecreaseUniqueCount,
    subTotal,
    totalQty,
    setTotalQty,
    setSubTotal,
    subTotalFunction,
    cartOpen,
    setCartOpen,
    deleteCartItem,
    moreArticles,
    setMoreArticles,
    checkoutHandler,
    paymentOpen,
    setPaymentOpen,
    roundNum,
    signupLoginPan,setSignupLoginPan,
    // =========>>> STORE VALUES ENDS HERE
    // =========>>> ADMIN FUNCTIONS STARTS HERE

    // =========>>> ADMIN FUNCTIONS ENDS HERE
    componentName,
    setComponentName,
    page,
    setPage,showdelete, setShowDelete
  };

  return (
    <myGlobalContext.Provider value={store}>
      {children}
    </myGlobalContext.Provider>
  );
};
export { Provider };
export default myGlobalContext;
