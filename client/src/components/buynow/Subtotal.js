import React, { useEffect, useState } from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const Subtotal = ({ item, totalPrice, totalItem, clearCart }) => {

  return (
    <div className="sub_item">
      <h3>
        Subtotal ({totalItem} item):
        <strong style={{ fontWeight: 700, color: "#111" }}>${totalPrice}</strong>
      </h3>
      <button onClick={clearCart}><DeleteSweepIcon style={{marginLeft: "10px"}}/>Clear Cart</button>
    </div>
  );
};

export default Subtotal;
