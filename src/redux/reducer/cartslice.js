import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
  name: "cart",
  initialState:[],
  
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    del(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, del } = CartSlice.actions;
export default CartSlice.reducer;
