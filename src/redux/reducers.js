import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    CartItems: [],
    SubTotal: 0,
    Shipping: 0,
    Tax: 0,
    Total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.CartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        state.CartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.CartItems.push(item);
      }
    },

    decrement: (state, action) => {
      const item = state.CartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.CartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },

    deleteFromCart: (state, action) => {
      state.CartItems = state.CartItems.filter((i) => i.id !== action.payload);
    },

    calculatePrice: (state) => {
      let sum = 0;
      state.CartItems.forEach((i) => (sum += i.price * i.quantity));
      state.SubTotal = sum;
      state.Shipping = state.SubTotal > 1000 ? 0 : 200;
      state.Tax = +(state.SubTotal * 0.050).toFixed();
      state.Total = state.SubTotal + state.Shipping + state.Tax;
    },
  }
);
