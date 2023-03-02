import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


const myContext = createContext();

export const MyContextWrapper = ({ children }) => {
  const [account, setAccount] = useState("");
  const [allUseEffectRunCode, setAllUseEffectRunCode] = useState();
  const [cartItems, setCartItem] = useState([]);
  const [token, setToken] = useState([]);
  const [run, setRun] = useState(false);


  // storing cart data to localStorage and others cart related functionality
  const localStorageData = JSON.parse(localStorage.getItem("cartItem")) || [];
  useEffect(() => {
    setCartItem(localStorageData);
  }, [run]);
  
  const toggleRun = () => {
    setRun((prev) => !prev);
  };
  // console.log(cartItems);
  const handleAddProduct = (product) => {
    const isProductExist = localStorageData?.find((singleItem) => {
      return singleItem.id === product.id;
    });
    if (isProductExist) {
      const data = localStorageData?.map((item) => {
        return item.id === product.id
          ? { ...isProductExist, quantity: isProductExist.quantity + 1 }
          : item;
      });
      localStorage.setItem("cartItem", JSON.stringify(data));
    } else {
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...cartItems, { ...product, quantity: 1 }])
      );
    }
    toggleRun();
  };
  //   Handle remove product
  const handleRemoveProduct = (product) => {
    const isProductExist = localStorageData?.find((singleItem) => {
      return singleItem.id === product.id;
    });
    if (isProductExist.quantity === 1) {
      const fildat = localStorageData.filter((item) => {
        return item.id !== product.id;
      });
      localStorage.setItem("cartItem", JSON.stringify(fildat));
    } else {
      const dt = localStorageData.map((item) => {
        return item.id === product.id
          ? { ...isProductExist, quantity: isProductExist.quantity - 1 }
          : item;
      });
      localStorage.setItem("cartItem", JSON.stringify(dt));
    }
    toggleRun();
  };
  //   const handle single product delete
  const deleteSingleItem = (product) => {
    const bal = localStorageData.filter((item) => {
      return item.id !== product.id;
    });
    localStorage.setItem("cartItem", JSON.stringify(bal));
    toggleRun();
  };

  //   clear the cart
  const clearCart = () => {
    localStorage.removeItem("cartItem");
    toggleRun();
  };
  const totalPrice = cartItems?.reduce(
    (price, item) => price + item.quantity * item.price.cost,
    0
  );

  // calculate total cart item
  const totalItem = cartItems?.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );
  console.log(totalItem, totalPrice);
  //   end of cart functionality




  // getting token data from localStorage and setting it to 'token' useState.(In login page I saved token data in localStorage)
  let localStorageTokenData = JSON.parse(localStorage.getItem("tokens")) || [];
  useEffect(() => {
    setToken(localStorageTokenData);
  }, [allUseEffectRunCode]);
  console.log(localStorageTokenData);


  // logout user
  const logoutUser = async (navigate) => {
    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (res.status !== 201) {
      console.log("Error occured when try to logout!");
    } else {
      console.log(res.data);
      localStorage.removeItem("tokens");
      setAllUseEffectRunCode(2);
      setAccount("");
      navigate("/");
      toast.success("successfully logout!", { position: "top-center" });
    }
  };


  return (
    <myContext.Provider
      value={{
        account,
        setAccount,
        cartItems,
        handleAddProduct,
        handleRemoveProduct,
        deleteSingleItem,
        clearCart,
        totalPrice,
        totalItem,
        toggleRun,
        setAllUseEffectRunCode,
        token,
        logoutUser
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export const MyContextSupply = () => {
  return useContext(myContext);
};
