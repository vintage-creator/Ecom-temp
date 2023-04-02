import React, { useContext } from "react";
import myGlobalContext from "../context";
const ConfirmDeleteTab = ({ props: { id } }) => {
  const { deleteHandler,setShowDelete } = useContext(myGlobalContext);
  return (
    <div className="grid grid-cols-1 gap-y-2">
      <div
        className="text-white text-center bg-red-600 rounded uppercase p-2 font-semibold tracking-wider cursor-pointer hover:bg-red-400"
        onClick={() => deleteHandler(id)}
      >
        Delete post
      </div>
      <div
        className="text-white text-center bg-blue-500 rounded uppercase p-2 font-semibold tracking-wider cursor-pointer hover:bg-blue-300"
        onClick={() => setShowDelete("")}
      >
        Cancel
      </div>
    </div>
  );
};

export default ConfirmDeleteTab;
