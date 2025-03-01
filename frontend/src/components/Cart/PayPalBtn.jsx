import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalBtn = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "clientId":
          "AUFwloPFeAwTPQbecrORAPHbHOZK_rNxJ1tsZMFaT28oAxFTUxWi2Gl1dRiG5Mu8f9R2RPH-O4B8T5VJ",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalBtn;
