import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import "./slide.css";
import { Divider } from "@mui/material";
import { SlideLoadingSkeletion } from "./AllCategory/Skeleton";
import axios from "axios";
// import { products } from "./productdata";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ title }) => {
  const [dealOfTheDay, setDealOfTheDay] = useState([]);
  const [loading, setlLoading] = useState(false);
  const getDealOftheDay = async () => {
    setlLoading(true);
    return await axios
      .get("/dealoftheday")
      .then((res) => {
        if (res.data) {
          setDealOfTheDay(res.data);
          setlLoading(false);
        } else {
          console.log("no data found!");
          // setlLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDealOftheDay();
  }, []);

  return (
    <>
    {loading ? <>
    <SlideLoadingSkeletion />
    </>:<div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {dealOfTheDay &&
          dealOfTheDay.map((e, i) => {
            return (
              <div key={i} className="slide-flex-single">
                <div className="products_items">
                  <div className="product_img">
                    <img src={e.url} alt="" />
                  </div>
                  <div className="bal-falaisi">
                    <h3 className="products_name">{`${e.title.shortTitle.slice(
                      0,
                      15
                    )}...`}</h3>
                    <h4 className="products_offer">{e.price.discount}% off</h4>
                    <p className="products_explore">{e.tagline}</p>
                  </div>
                  <div className="ba-absolute">
                    <NavLink key={i} to={`/getproductsone/${e.id}`} className="buy-pos-show-absolute-btn">
                      <button>Show Details</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>}
    </>
  );
};
export default Slide;
