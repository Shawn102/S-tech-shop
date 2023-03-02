import React, {  useEffect, useState } from "react";
import { Divider } from "@mui/material";
import "./buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
import CircularProgress from "@mui/material/CircularProgress";
import { MyContextSupply } from "../../Context";
import EmptyCart from "./EmptyCart";

const Buynow = () => {
  const { cartItems, totalPrice, totalItem, clearCart } = MyContextSupply();
  const [cartdata, setCartdata] = useState("");
  const [loading, setLoading] = useState(false);


  // console.log(totalPrice);

  if(cartItems && cartItems.length === 0) {
    return <EmptyCart />
  }

  return (
    <>
      {loading ? (
        <div className="circle">
          <CircularProgress />
          <h2>Loading Data</h2>
        </div>
      ) : cartItems.length !== 0 && (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="leftbuyprice">Price</span>
              <Divider />
              {cartItems.map((items, index) => {
                return (
                  <div key={index}>
                    <div className="item_containert">
                      <img src={items.url} alt="" />
                      <div className="item_details">
                        <h3>{items.title.longTitle}</h3>
                        <h3>{items.title.shortTitle}</h3>
                        <h3 className="diffrentprice">${items.price.cost}</h3>
                        <p className="unusuall">Usually dispatch in 8 days.</p>
                        <p>Eligible for FREE shipping</p>
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        />
                        <h3 className="item_price">
                          price: {items.price.cost}$
                        </h3>
                        <Option item={items} />
                      </div>
                      <h3 className="item_price">
                        total:{items.quantity}*{items.price.cost}=
                        {items.quantity * items.price.cost}$
                      </h3>
                    </div>
                    <Divider />
                  </div>
                );
              })}
              <Subtotal
                item={cartdata}
                totalPrice={totalPrice}
                totalItem={totalItem}
                clearCart={clearCart}
              />
            </div>
            <Right
              item={cartdata}
              totalPrice={totalPrice}
              totalItem={totalItem}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Buynow;
