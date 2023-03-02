import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MaterialUi from "./MaterialUi";
import { ReactLoadingSkeletonAllProduct } from "./Skeleton";
import { MyContextSupply } from "../../../Context";
import "./allproduct.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AllProductCategory = () => {
  const { handleAddProduct } = MyContextSupply();
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [whichCategory, setWhichCategory] = useState("");

  const fetchingCategoryItem = async () => {
    setIsProductLoading(true);
    return await axios
      .get(`/getproducts/${whichCategory}`)
      .then((res) => {
        if (res.status === 201) {
          setAllProducts(res.data);
          setIsProductLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchingCategoryItem();
  }, [whichCategory]);
  const setOnClickForCategory = (value) => {
    if (value === "all") {
      setWhichCategory("");
    } else {
      setWhichCategory(value);
    }
  };
  console.log(allProducts);

  return (
    <section className="all-product-section">
      <div className="all-product-left">
        <div className="product-left-select-title-flex">
          <MaterialUi
            className="pos-ma"
            setOnClickForCategory={setOnClickForCategory}
          />
        </div>
      </div>
      <div className="all-product-right">
        <div className="allproduct-flex">
          {isProductLoading ? (
            <>
              <ReactLoadingSkeletonAllProduct />
              <ReactLoadingSkeletonAllProduct />
              <ReactLoadingSkeletonAllProduct />
              <ReactLoadingSkeletonAllProduct />
              <ReactLoadingSkeletonAllProduct />
              <ReactLoadingSkeletonAllProduct />
            </>
          ) : (
            allProducts.map((prod) => {
              const { id, url, price, title } = prod;
              const { mrp, cost, discount } = price && price;
              const { shortTitle } = title && title;
              return (
                <div key={id} className="allproducts">
                  <div className="img-ab-discount">
                    <img src={url} alt="" className="allproduct_img" />
                    {discount >= 25 && (
                      <div>
                        <LocalFireDepartmentIcon
                          className="m-discount-icon"
                          style={{
                            color: "red",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            top: "5px",
                            fontSize: "20px",
                          }}
                        />
                        <p className="p-di">{discount}%off</p>
                      </div>
                    )}
                  </div>
                  <div className="all-product-text">
                    <Divider />
                    <h3 className="products_name">
                      {shortTitle.slice(0, 20)}...
                    </h3>
                    <p>
                      <span className="main-price-span">${mrp}</span> ${cost}
                    </p>
                    <div className="button-all-product-flex">
                      <NavLink to={`/getproductsone/${id}`} className="navlink-all-product-btn">
                        <button className="btn-all-p-1-d">Details</button>
                      </NavLink>
                      <button onClick={() => handleAddProduct(prod)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProductCategory;
