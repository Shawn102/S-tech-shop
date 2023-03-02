import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Your list is currently empty",
        "Back to Home page and Order something",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: "!",
    //   shuffle: true,
      loop: true,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="buynow_section">
      <div className="display-empty-cart-flex">
        <div>
          <h2>
            <span ref={el}></span>
          </h2>
          {/* <img
            src=""
            alt="you don't have any order.."
            className="cart-my-image"
          /> */}
          <div className="btn-center-cart">
            <button className="paypal-login-button btn-empty-cart-navigate-home">
              <Link style={{color: "white", textDecoration: "none"}} to="/" className="Link-cart">
                Back to Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
