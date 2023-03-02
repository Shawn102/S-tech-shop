import React, { useState } from "react";
import blklogo from "../../assets/blacklogoamazon.png";
import "./signup.css";
import { Link } from "react-router-dom";
import stech from "../../assets/stech.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Sign_up = () => {
  const navigate = useNavigate();
  const [udata, setUdata] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const { fname, lname, email, mobile, password, cpassword } = udata;
  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata({ ...udata, [name]: value });
  };

  // form data submiting to backend
  const senddata = async (e) => {
    e.preventDefault();

    if (!fname || !lname || !email || !mobile || !password || !cpassword) {
      toast.warn("Please Fill all the inputs");
    } else {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          mobile,
          password,
          cpassword,
        }),
      });
      const data = await res.json();
      // console.log(data);
      if (res.status === 422) {
        toast.warn("This user Email already have an account!", {
          position: "top-center",
          autoClose: 4000,
        });
      } else if (res.status === 403) {
        toast.warn("Password and confirm password not matched!", {
          position: "top-center",
          autoClose: 4000,
        });
      } else {
        toast.success("Successfully registered", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUdata({
          ...udata,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          password: "",
          cpassword: "",
        });
        navigate("/login");
      }
    }
  };

  return (
    <>
      <div className="section-signin-signup height-signup">
        <div className="sign_container">
          <div className="sign_header">
            <img src={stech} alt="" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>Create New Account</h1>
              <div className="form_data">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  onChange={adddata}
                  value={fname}
                />
              </div>
              <div className="form_data">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  onChange={adddata}
                  value={lname}
                />
              </div>
              <div className="form_data">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={adddata}
                  value={email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Phone mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  onChange={adddata}
                  value={mobile}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={adddata}
                  value={password}
                  placeholder="At least 6 characters"
                  autoComplete="off"
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  onChange={adddata}
                  value={cpassword}
                  placeholder="At least 6 characters"
                  autoComplete="off"
                />
              </div>
              <button onClick={senddata} className="signin_btn">
                Sign Up
              </button>
              <div className="signin_info">
                <p>
                  Already have an account? <Link to="/login">Signin</Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
