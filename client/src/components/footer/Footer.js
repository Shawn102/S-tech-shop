import { Divider } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { ContactForm } from "./Email";
import { ToastContainer} from "react-toastify";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-contract-area">
        <div>
          <div className="footer-logo-flex">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2021/12/BO/SD/WY/32210689/led-day-night-acrylic-sign-board-250x250.jpg"
              alt=""
              className="nav-logo-s"
            />
            <p>
              <span className="p-span-footer-title">T</span>echnology
              <br />
              <span
                style={{
                  background: "white",
                  color: "black",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                Shop
              </span>
            </p>
          </div>
          <p
            style={{
              marginTop: "10px",
              textShadow: "1px 1px 1px white",
              color: "#6f08de",
            }}
          >
            Quality is our first Priority
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
        <div className="fol-cal-div">
        <div>
          <h3>Follow us</h3>
          <Divider style={{ background: "crimson" }} />
          <div>
            <p>
              <a href="https://www.linkedin.com/in/niamul102/" target="_blank" className="links-footer">
                LinkedIn
              </a>
              </p>
              <p>
              <a href="https://www.facebook.com/niamul102" target="_blank" className="links-footer">
                Facebook
              </a>
            </p>
            <p>
              <a href="https://github.com/Shawn102" target="_blank" className="links-footer">
                GitHub
              </a>
            </p>
          </div>
        </div>
        <div style={{paddingTop: "10px"}}>
          <h3>Call Us</h3>
          <Divider style={{ background: "crimson" }} />
          <h4>(+86)13238673203</h4>
        </div>
        </div>
      </div>
      <div className="underline-footer"></div>
      <div className="lastdetails">
        <p
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Copyright&nbsp;{" "}
          <AiOutlineCopyrightCircle style={{ fontSize: "15px" }} />
          &nbsp; {year}&nbsp;{" "}
          <span style={{ color: "crimson" }}>Md Niamul Hakim Shawn</span>. All
          Rights Reserved
        </p>
      </div>
      {/* <ToastContainer /> */}
    </footer>
  );
};

export default Footer;

{
  /* <div className="footer_container">
<div className="footer-linkarea">
  <div>

    <div className="footer-logo-flex">
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2021/12/BO/SD/WY/32210689/led-day-night-acrylic-sign-board-250x250.jpg"
      alt="" className="nav-logo-s"
    /><p><span className="p-span-footer-title">T</span>echnology<br/><span style={{background: "white", color: "black", padding: "2px", borderRadius: "5px"}}>Shop</span></p>
    </div>
    
    <Divider style={{background: "crimson", height: "3px"}}/>

    <h3>Contract Us</h3>
    <div>
    <a href="https://www.linkedin.com/in/niamul102/" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://www.facebook.com/niamul102" target="_blank">
        <AiFillFacebook />
      </a>
      <a href="https://github.com/Shawn102" target="_blank"><AiFillGithub /></a>
    </div>
    <h3>About Us</h3>
    <div className="underline-footer"></div>
    <div>
      <p>(+86)13238673203</p>
      <p>shawnniamul58@gmail.com</p>
    </div>
  </div>
  <div>
    <ContactForm />
  </div>
</div>
</div> */
}
