import React from "react";
import { MyContextSupply } from "../../Context";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ item }) => {
  const { handleAddProduct, handleRemoveProduct, deleteSingleItem } = MyContextSupply();
  const { setAccount } = MyContextSupply();

  return (
    <div className="add_remove_select">
      <div className="button-add-remove">
        <RemoveIcon
          onClick={() => handleRemoveProduct(item)}
          style={{
            fontSize: "30px",
            color: "goldenrod",
            cursor: "pointer",
            marginRight: "5px",
            border: "1px solid goldenrod",
            borderRadius: "5px",
          }}
        />
        {item && item?.quantity}
        <AddIcon
          onClick={() => handleAddProduct(item)}
          style={{
            fontSize: "30px",
            color: "goldenrod",
            cursor: "pointer",
            marginLeft: "5px",
            border: "1px solid goldenrod",
            borderRadius: "5px",
          }}
        />
        
      </div>
      <p onClick={() => deleteSingleItem(item)} style={{ cursor: "pointer" }}>Delete</p>
      <span>|</span>
      <p className="forremovemedia" style={{ cursor: "pointer" }}>
        Save or Later
      </p>
      <ToastContainer />
    </div>
  );
};

export default Option;
