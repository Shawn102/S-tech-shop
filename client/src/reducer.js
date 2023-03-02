import axios from "axios";
export const reducer = (state, action) => {
    if(action.type === "ADD_CART") {
        let newData;
        axios
      .get(`/getSingleItem/${action.payload}`)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          newData = {
            id: res.data.id,
            amount: 1,
            price: {
              mrp: res.data.mrp,
              cost: res.data.cost,
              discount: res.data.discount,
            },
            url: res.data.url,
            title: {
              shortTitle: res.data.title.shortTitle,
              longTitle: res.data.title.longTitle,
            },
          };
        }
      })
      .catch((err) => console.log(err));
    //   checking is this already exist in state cart
    const isThere = state.carts.find((inCart) => inCart.id === newData.id);
    if(!isThere) {
        return {...state, carts:newData}
    }
    }
  throw new Error("no matching action type");
};
