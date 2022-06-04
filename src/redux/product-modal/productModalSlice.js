import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productSlug: null
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    set: (state, action) => {
      state.productSlug = action.payload;
    },
    remove: (state) => {
      state.productSlug = null;
    }
  }
});

export const { set, remove } = productModalSlice.actions;

export default productModalSlice.reducer;