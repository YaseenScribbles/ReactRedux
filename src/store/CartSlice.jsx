import { createSlice } from "@reduxjs/toolkit";
import { status } from "../Utils/Status";

const cartProducts = {
  data: [],
  status: status.IDLE,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartProducts,
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
    },
    remove(state,action) {
        state.data = state.data.filter(item => item.id !== action.payload)
    }
  },
});

export default cartSlice.reducer;

export const { add,remove } = cartSlice.actions;
