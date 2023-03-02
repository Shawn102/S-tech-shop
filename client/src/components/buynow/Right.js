import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { MyContextSupply } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Right = ({ item, totalPrice, totalItem }) => {
  const { cartItems, account, clearCart } = MyContextSupply();
  const navigate = useNavigate();
  const [myAllDataForbackend, setMyAllDataForBackend] = useState("bal");
  const [bal, setBal] = useState({});
  const [run, setRun] = useState(false);
  // console.log(myAllDataForbackend);
  // console.log(bal);
  console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID)
  const sendPaymentDataToBackend = async () => {
    await axios
      .post(
        "/purchase",
        {
          cartItems,
          bal,
          myAllDataForbackend,
          totalItem,
          totalPrice,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 201) {
          // res.data.message
          console.log(res.data);
          clearCart();
          navigate("/personalinfo");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const toggleRun = () => {
    setRun((previous) => !previous);
  };
  useEffect(() => {
    if (bal !== undefined || false) {
      sendPaymentDataToBackend();
    }
  }, [run]);
  return (
    <div className="right_buy">
      <img
        src="https://cdn.nutrabay.com/wp-content/uploads/2017/09/100-Purchase-protection-at-nutrabay.png"
        alt="rightimg" style={{padding: "10px", background: "white"}}
      />
      <div className="cost_right">
        <p>More than 1500$ order is eligible for FREE Delivery.</p> <br />
        <span style={{ color: "#565959" }}>
          Select this option at checkout. Details
        </span>
        <h3>
          Subtotal ({totalItem} item):
          <span style={{ fontWeight: 700 }}>${totalPrice}</span>
        </h3>
        <div>
          <h2>Payment Info.</h2>
          {account ? (
            <PayPalScriptProvider
              options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
            >
              <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: totalPrice,
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  return actions.order.capture().then(function (details) {
                    console.log(details);
                    toast.success(
                      `Payment successful by ${details.payer.name.given_name}`,
                      { position: "top-center" }
                    );
                    setMyAllDataForBackend(details.purchase_units[0].shipping);
                    setBal({ bal: details.create_time, sal: details.status });
                    if (details.status === "COMPLETED") {
                      toggleRun();
                    }
                  });
                }}
              />
            </PayPalScriptProvider>
          ) : (
            <>
              <Link to="/login">
                <button className="paypal-login-button">
                  Pay<span>Pal</span>
                </button>
              </Link>
              <h5 style={{ color: "red"}}>
                <strong style={{color: "blue"}}>Note:</strong> Products will be delivered at your PayPal address.
              </h5>
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Right;
