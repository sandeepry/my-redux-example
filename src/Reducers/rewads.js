import { createReducer, createAction } from "@reduxjs/toolkit";

export const increment = createAction('rewads/increment');
export const incrementByAmount = createAction('rewads/incrementByAmount');
const initialState = {
  points: 15,
};

const rewadsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points+=action.payload;
    })

});

export default rewadsReducer;
