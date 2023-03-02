import React, { useEffect, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PurchaseHistoryLoadingSkeleton } from "../home/AllCategory/Skeleton";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const PurchaseDetails = ({
  account,
  setIsShippingPopUpOpen,
  setisProductDetailsPopUpOpen,
  setShippingDetails,
  setProductDetails,
}) => {
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [run, setRun] = useState(false);
  const toggleRun = () => {
    setRun((prev) => !prev);
  };
  const getPurchaseHistoryData = async () => {
    setLoadingHistory(true);
    return axios
      .get("/getpurchasehistory", { withCredentials: true })
      .then((res) => {
        if (res.status === 201) {
          setPurchaseHistory(res.data);
          setLoadingHistory(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPurchaseHistoryData();
  }, [run]);
  console.log(purchaseHistory);
  const DeleteThisHistory = async (id) => {
    await axios
      .post(`/deletesinglehistory/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.status === 201) {
          console.log("History deleted ");
          toggleRun();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {loadingHistory ? (
        <PurchaseHistoryLoadingSkeleton />
      ) : (
        <div className="purchase-box">
          <h3>Purchase History</h3>
          {purchaseHistory?.purchasehistory?.length === 0 ? (
            <h1>You haven't bought anything to show in the history!</h1>
          ) : (
            <div className="table-history-show">
              <table>
                <thead>
                  <tr className="its-head-table">
                    <th>Purchase Date</th>
                    <th>Quantity</th>
                    <th>Total Price($)</th>
                    <th>Shipping Details</th>
                    <th>Product Details</th>
                    <th>Delete this history</th>
                  </tr>
                </thead>

                {purchaseHistory.purchasehistory.map((singleValues, index) => {
                  const {
                    id,
                    totalItem,
                    totalPrice,
                    purchaseTime,
                    purchaseDetails,
                    cartItems,
                    _id,
                  } = singleValues;
                  const dt = new Date(purchaseTime).toLocaleString();
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{dt}</td>
                        <td>{totalItem}</td>
                        <td>{totalPrice}</td>
                        <td>
                          <button
                            style={{ borderBottom: "2px solid blue" }}
                            onClick={() => {
                              setIsShippingPopUpOpen(true);
                              setShippingDetails(purchaseDetails);
                            }}
                            className="shipping-details-td"
                          >
                            <LocalShippingIcon style={{ color: "blue" }} />
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              setisProductDetailsPopUpOpen(true);
                              setProductDetails(cartItems);
                            }}
                            className="shipping-details-td"
                          >
                            Check
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              DeleteThisHistory(_id);
                            }}
                            className="shipping-details-td"
                          >
                            <DeleteForeverIcon
                              style={{ color: "red" }}
                              className="delete-history"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          )}
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default PurchaseDetails;
