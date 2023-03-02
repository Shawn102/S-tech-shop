import React from "react";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PurchaseDetails from "./PurchaseDetails";

const ProductPopUp = ({
  isProductDetailsPopUpOpen,
  setisProductDetailsPopUpOpen,
  productDetails,
}) => {
  return (
    <div
      className={`${
        isProductDetailsPopUpOpen
          ? "popupProductDetails show-popupProductDetails"
          : "popupProductDetails"
      }`}
    >
      <div className="productPopup-box">
        <button
          onClick={() => setisProductDetailsPopUpOpen(false)}
          className="closeProductpopup-btn"
        >
          <CloseIcon />
        </button>
        {productDetails && productDetails?.map((singleProduct) => {
          const {
            _id,
            url,
            title: { shortTitle },
            quantity,
            price: { cost },
          } = singleProduct;
          return (
            <div key={_id}>
              <div  className="purchase-flex-all">
                <img
                  src={url}
                  alt=""
                />
                <span>|</span>
                <p>Product: {shortTitle}</p> <span>|</span>
                <p>Quantity: {quantity}</p>
                <span>|</span>
                <p>Total: {quantity * cost}$</p>
              </div>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPopUp;
