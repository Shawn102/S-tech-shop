import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnev from "./components/newnavbar/Newnev";
import Maincomponent from "./components/home/Maincomponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sign_in from "./components/signup_signin/Sign_in";
import Sign_up from "./components/signup_signin/Sign_up";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import Personalinfo from "./components/dashbord/Dashbord";
import Footer from "./components/footer/Footer";
import { MyContextSupply } from "./Context";
import CircularProgress from "@mui/material/CircularProgress";
import FourZeroFour from "./components/FourZeroFour";
import { ToastContainer, toast} from "react-toastify";
import { useEffect, useState } from "react";

function App() {
  const {token, logoutUser, setAccount, setAllUseEffectRunCode} = MyContextSupply();
  const navigate = useNavigate();
  const [data, setData] = useState(false);

   
  // this is for auto logout after login
  if(token[0]?.token !== undefined) {
    setTimeout(() => {
      logoutUser(navigate);
    }, 86390000);
  }
  useEffect(() => {
    const tim = setTimeout(() => {
      setData(true);
    }, 2000);
    return () => {
      clearTimeout(tim);
    };
  }, []);
  return (
    <>
      {data ? (
        <>
          {/* <Newnev /> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Maincomponent />
                  <Footer />
                </>
              }
            />
            {token[0]?.token  ? <Route
              path="/personalinfo"
              element={
                <>
                  <Navbar />
                  <Personalinfo />
                </>
              }
            />:<Route
            path="/login"
            element={
              <>
                <Navbar />
                <Sign_in />
              </>
            }
          />}
            
            <Route
              path="/login"
              element={
                <>
                  <Navbar />
                  <Sign_in />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Navbar />
                  <Sign_up />
                </>
              }
            />
            <Route
              path="/getproductsone/:id"
              element={
                <>
                  <Navbar />
                  <Cart />
                </>
              }
            />
            <Route
              path="/buynow"
              element={
                <>
                  <Navbar />
                  <Buynow />
                </>
              }
            />
            <Route path="*" element={<FourZeroFour />} />
          </Routes>
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading</h2>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
