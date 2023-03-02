import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import PurchaseDetails from "./PurchaseDetails";
import ShippingPopup from "./ShippingPopup";
import ProductPopUp from "./ProductPopUp";
import "./dashbord.css";
import axios from "axios";
import { PersonalInfoSkeletonLoading } from "../home/AllCategory/Skeleton";
import { MyContextSupply } from "../../Context";
import { useNavigate } from "react-router-dom";


const Personalinfo = ({ logoutUser }) => {
  const { account, setAccount, setAllUseEffectRunCode } = MyContextSupply();
  const navigate = useNavigate();
  const [isProfileInfoLoading, setIsProfileInfoLoading] = useState(false);
  const [isShippingPopUpOpen, setIsShippingPopUpOpen] = useState(false);
  const [isProductDetailsPopUpOpen, setisProductDetailsPopUpOpen] =
    useState(false);
  const [shippingDetails, setShippingDetails] = useState("");
  const [productDetails, setProductDetails] = useState("");

  // const getting current user data
  const UserData = async () => {
    setIsProfileInfoLoading(true);
    return await axios
      .get("/getuserdetails", { withCredentials: true })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 201) {
          setAccount(res.data);
          setIsProfileInfoLoading(false);
        }
      })
      .catch((err) => {
        navigate("/login");
        localStorage.removeItem("tokens");
        setAllUseEffectRunCode(1);
      });
  };
  useEffect(() => {
    UserData();
  }, []);
  console.log(account);
  return (
    <div className="purchase-container">
      <div className="profile-section">
        <h2>Personal Info</h2>
        {isProfileInfoLoading ? (
          <PersonalInfoSkeletonLoading />
        ) : (
          <div className="box-container-model ">
            <Avatar
              className="avtar-personalinfo"
              id="basic-button"
              aria-haspopup="true"
            >
              {account && account.fname[0]?.toUpperCase()}
            </Avatar>
            <h2 className="h4-avatar">{account && account.fname}</h2>
            <h4 className="h4-avatar last-name">{account && account.lname}</h4>
            <div className="personal-info-email-phone">
              <span>Email: {account && account.email}</span>
              <span>Phone: {account && account.mobile}</span>
            </div>
          </div>
        )}
      </div>
      <PurchaseDetails
        account={account}
        setIsShippingPopUpOpen={setIsShippingPopUpOpen}
        setisProductDetailsPopUpOpen={setisProductDetailsPopUpOpen}
        setShippingDetails={setShippingDetails}
        setProductDetails={setProductDetails}
      />
      <ShippingPopup
        isShippingPopUpOpen={isShippingPopUpOpen}
        setIsShippingPopUpOpen={setIsShippingPopUpOpen}
        shippingDetails={shippingDetails}
      />
      <ProductPopUp
        isProductDetailsPopUpOpen={isProductDetailsPopUpOpen}
        setisProductDetailsPopUpOpen={setisProductDetailsPopUpOpen}
        productDetails={productDetails}
      />
    </div>
  );
};

export default Personalinfo;






// const account = {
//   _id: "something",
//   fname: "Md Niamul Hakim",
//   lname: "Shawn",
//   email: "shawnniamul58@gmail.com",
//   mobile: "13238673203",
//   purchasehistory: [
//     {
//       id: 1234,
//       totalItem: 5,
//       totalPrice: 2240,
//       purchaseTime: "023-02-16",
//       paymentCompleted: "Completed",
//       purchaseDetails: {
//         name: {
//           full_name: "Md Niamul Hakim",
//         },
//         address: {
//           address_line_1: "Bailong road, Panlong",
//           admin_area_2: "Kunming",
//           postal_code: "650000",
//           country_code: "C2",
//         },
//       },
//       cartItems: [
//         {
//           description:
//             "This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",
//           discount: "Upto 70% Off",
//           id: "product2",
//           price: { mrp: 499, cost: 166, discount: "66%" },
//           quantity: 3,
//           tagline: "Deal of the Day",
//           title: {
//             shortTitle: "Fitness Gear",
//             longTitle:
//               "AJRO DEAL New Adjustable Single Resistance Tube  (Multicolor)",
//           },
//           url: "https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",

//           _id: "63ec3b594cfcbc8d3cb3d64ess",
//         },
//         {
//           description:
//             "This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",
//           discount: "Upto 70% Off",
//           id: "product3",
//           price: { mrp: 499, cost: 166, discount: "66%" },
//           quantity: 3,
//           tagline: "Deal of the Day",
//           title: {
//             shortTitle: "Gear",
//             longTitle:
//               "AJRO DEAL New Adjustable Single Resistance Tube  (Multicolor)",
//           },
//           url: "https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",

//           _id: "63ec3b594cfcbc8d3cb3d64e",
//         },
//       ],
//     },
//   ],
// };