import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";
import { MyContextSupply } from "../../Context";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { setAccount, handleAddProduct } = MyContextSupply();
  const { id } = useParams("");
  const navigate = useNavigate("");
  const [inddata, setIndedata] = useState();

  console.log(inddata);

  const getinddata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setIndedata(data);
  };
  useEffect(() => {
    const tim = setTimeout(getinddata, 1.5);
    return () => {
      clearTimeout(tim);
    };
  }, [id]);

  return (
    <div className="cart_section">
      {inddata !== undefined && (
        <>
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.url} alt="" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => {
                  handleAddProduct(inddata);
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleAddProduct(inddata);
                  navigate("/buynow");
                }}
                className="cart_btn2"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="right_cart">
            {/* <h3>{shortTitle}</h3> */}
            <h3>{inddata.title.longTitle}</h3>
            <Divider />
            <p className="mrp">M.R.P: ${inddata.price.mrp}</p>

            <p>
              Deal of the Day:
              <span style={{ color: "red" }}>${inddata.price.cost}</span>
            </p>
            <p>
              You save:
              <span style={{ color: "blue" }}>
                ${inddata.price.mrp - inddata.price.cost}(
                {inddata.price.discount}%)
              </span>
            </p>
            <div className="discount_box">
              <h5>
                Discount:
                <span style={{ color: "skyblue" }}>{inddata.discount}</span>
              </h5>
              <h4>
                Free Delivery:
                <span style={{ color: "red", fontW: 600 }}>Every Sunday</span>
              </h4>
              <p>
                Fastest delivery:
                <span style={{ color: "blue", fontWeight: 600 }}>
                  Tomorrow 11am
                </span>
              </p>
            </div>
            <p className="description">
              About the Item:
              <span
                style={{
                  color: "red",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.4px",
                }}
              >
                {inddata.description}
              </span>
            </p>
          </div>         
        </div>
        <div className="cart-full-footer-style">
        <h1>{inddata.title.shortTitle}</h1>
        </div>
        </>
      )}
      {!inddata && (
        <div className="circle">
          <CircularProgress />
          <h2>Loading Data</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
