import React, { useState } from "react";
import stech from "../../assets/stech.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContextSupply } from "../../Context";

const Sign_in = () => {
  const navigate = useNavigate();
  const { setAllUseEffectRunCode } = MyContextSupply();
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logdata;
  const adddata = (e) => {
    const { name, value } = e.target;
    setData({ ...logdata, [name]: value });
  };
  const onSubmitHandle = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.warn("Please fill all the inputs", { position: "top-center" });
    } else {
      return await axios
        .post("/login", { email, password })
        .then((res) => {
          toast.success("Login successful!", { position: "top-center" });
          console.log(res);
          setData({ email: "", password: "" });
          localStorage.setItem("tokens", JSON.stringify(res.data.tokens));
          setAllUseEffectRunCode("Success")
            navigate("/personalinfo")
        })
        .catch(() => {
          toast.warn("Invalid details! please enter correct values!", {
            position: "top-center",
          });
        });
    }
  };
  return (
    <>
      <section className="section-signin-signup">
        <div className="sign_container">
          <div className="sign_header">
            <img src={stech} alt="" />
          </div>
          <div className="sign_form">
            <form onSubmit={onSubmitHandle}>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={adddata}
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={adddata}
                  id="password"
                  placeholder="At least 6 characters"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="signin_btn">
                Login
              </button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to S-Technology?</p>
            <button>
              <Link to="/register">Create your S-Tech account</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
