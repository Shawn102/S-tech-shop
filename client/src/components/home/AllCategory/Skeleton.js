import { Divider } from "@mui/material";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import List from "@mui/material/List";
import "react-multi-carousel/lib/styles.css";

export const ReactLoadingSkeletonAllProduct = () => {
  return (
    <SkeletonTheme baseColor="#e8dbda" highlightColor="gray">
      <div className="allproducts skeleton-main-div">
        <div className="img-ab-discount skeleton-ab-img">
          <Skeleton height={185} width="100%" className="skeleton-img" />
        </div>
        <div className="all-product-text">
          <h3 className="products_name">
            <Skeleton height={40} />
          </h3>
          <p>
            <span className="main-price-span">
              <Skeleton width={140} height={20} />
            </span>
          </p>
          <div className="button-all-product-flex-skeleton">
            <Skeleton width={60} height={28} className="buttons-skeleton" />
            <Skeleton width={100} height={28} className="buttons-skeleton" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export const SlideLoadingSkeletion = () => {
  return (
    <SkeletonTheme baseColor="#e8dbda" highlightColor="gray">
      <div className="products_section">
        <div className="products_deal">
          <h3>
            <Skeleton width={250} height={30} />
          </h3>
        </div>
        <Divider />
        <div className="slide-skeleton-flex">
          <div className="slide-flex-single slide-flex-single-width">
            <div className="products_items">
              <div className="product_img img-skeleton-width-fix">
                <Skeleton height={150} />
              </div>

              <div className="bal-falaisi">
                <h3 className="products_name">
                  <Skeleton height={30} />
                </h3>
                <h4 className="products_offer">
                  <Skeleton />
                </h4>
                <p className="products_explore">
                  <Skeleton />
                </p>
              </div>
            </div>
          </div>
          <div className="slide-flex-single slide-flex-single-width hide-small-screen-slide-one">
            <div className="products_items">
              <div className="product_img img-skeleton-width-fix">
                <Skeleton height={150} />
              </div>
              <div className="bal-falaisi">
                <h3 className="products_name">
                  <Skeleton height={30} />
                </h3>
                <h4 className="products_offer">
                  <Skeleton />
                </h4>
                <p className="products_explore">
                  <Skeleton />
                </p>
              </div>
            </div>
          </div>
          <div className="slide-flex-single slide-flex-single-width hide-small-screen-slide-two">
            <div className="products_items">
              <div className="product_img img-skeleton-width-fix">
                <Skeleton height={150} />
              </div>
              <div className="bal-falaisi">
                <h3 className="products_name">
                  <Skeleton height={30} />
                </h3>
                <h4 className="products_offer">
                  <Skeleton />
                </h4>
                <p className="products_explore">
                  <Skeleton />
                </p>
              </div>
            </div>
          </div>
          <div className="slide-flex-single slide-flex-single-width hide-small-screen-slide-two">
            <div className="products_items">
              <div className="product_img img-skeleton-width-fix">
                <Skeleton height={150} />
              </div>
              <div className="bal-falaisi">
                <h3 className="products_name">
                  <Skeleton height={30} />
                </h3>
                <h4 className="products_offer">
                  <Skeleton />
                </h4>
                <p className="products_explore">
                  <Skeleton />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export const ListItemCategorySkeleton = () => {
  return (
    <List>
      <div className="text-material-category">
        <SkeletonTheme baseColor="#e8dbda" highlightColor="gray">
          <Skeleton height={40} />
          <Divider />
          <Skeleton height={40} />
          <Divider />
          <Skeleton height={40} />
          <Divider />
          <Skeleton height={40} />
          <Divider />
          <Skeleton height={40} />
          <Divider />
          <Skeleton height={40} />
          <Divider />
        </SkeletonTheme>
      </div>
    </List>
  );
};

export const PurchaseHistoryLoadingSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e8dbda" highlightColor="gray">
      <div className="purchase-box">
        <h3>Purchase History</h3>
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
            <tbody>
              <tr>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export const PersonalInfoSkeletonLoading = () => {
  return (
    <SkeletonTheme baseColor="#e8dbda" highlightColor="gray">
    <div className="box-container-model ">
      <div className="personal-skeleton-loading">
        <Skeleton circle={true} height={55} width={55} />
      </div>
      <div className="skeleton-padd">
        <h2 className="h4-avatar h2-per-last">
          <Skeleton height={25} />
        </h2>
        <h4 className="h4-avatar last-name h4-per-last">
          <Skeleton height={20} />
        </h4>
      </div>
      <div className="personal-info-email-phone-skeleton">
        <div className="margin-personal-email-phone">
          <Skeleton height={20} />
        </div>
        <div className="margin-personal-email-phone">
          <Skeleton height={20} />
        </div>
      </div>
    </div>
    </SkeletonTheme>
  );
};

{
  /* <Stack spacing={1} width="100%">
                <Skeleton variant="rounded" width="100%" height={320} animation="wave" />
            </Stack> */
}
