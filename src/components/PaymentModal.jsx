import React, { useContext } from "react";
import myGlobalContext from "../context";
function PaymentModal({ children }) {
  const { paymentOpen } = useContext(myGlobalContext);
  return (
<>
{ paymentOpen && <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-30">
      {children}
    </div>}
</>
  );
}

export default PaymentModal;
