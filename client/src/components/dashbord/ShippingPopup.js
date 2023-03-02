import React from "react";

const purchaseDetails = {
  name: {
    full_name: "Md Niamul Hakim",
  },
  address: {
    address_line_1: "Bailong road, Panlong",
    admin_area_2: "Kunming",
    postal_code: "650000",
    country_code: "C2",
  },
};

const ShippingPopup = ({
  isShippingPopUpOpen,
  shippingDetails,
  setIsShippingPopUpOpen,
}) => {
  const { name, address } = shippingDetails && shippingDetails;
  const { full_name } = shippingDetails && name && name;
  const {
    address_line_1: road,
    admin_area_2: city,
    postal_code,
    country_code,
  } = shippingDetails && address && address;
  return (
    <div
      className={`${
        isShippingPopUpOpen
          ? "popupShipping show-popUp-shipping"
          : "popupShipping"
      }`}
    >
      <div className="shippingpopupboxdetails">
        <p style={{ textDecoration: "underline", color: "blue" }}>
          Address of Shipping:
        </p>
        <h3>{full_name}</h3>
        <h4>{road}</h4>
        <h5>City: {city}</h5>
        <h5>Postal Code: {postal_code}</h5>
        <h5>Country Code: {country_code}</h5>
        <button onClick={() => setIsShippingPopUpOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default ShippingPopup;
