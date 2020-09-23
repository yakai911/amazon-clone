export const initialState = {
  basket: [
    {
      id: "13122",
      title:
        "Yamaha F310 - Full Size Steel String Acoustic Guitar - Traditional Western Body - Natural",
      price: 1154.6,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51INShoKdNL._AC_SX569_.jpg",
    },
  ],
  user: null,
  count: 1,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`无法移除Id为${index}的商品`);
      }
      return { ...state, basket: newBasket };

    case "SET_USER":
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default reducer;
