import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems") !== null ?
JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
  items
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = findItem(state.items, newItem);
      if (duplicate.length > 0) {
        state.items = deleteItem(state.items, newItem);
        state.items = [...state.items, {
          ...newItem,
          id: duplicate[0].id,
          quantity: duplicate[0].quantity + newItem.quantity,
        }];
      } else {
        state.items = [...state.items, {
          ...newItem,
          id: state.items.length > 0 ?
          state.items[state.items.length - 1].id + 1 : 1
        }];
      }
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.items)));
    },
    updateItem: (state, action) => {
      const updatedItem = action.payload;
      const duplicate = findItem(state.items, updatedItem);
      if (duplicate.length > 0) {
        state.items = deleteItem(state.items, updatedItem);
        state.items = [...state.items, {
          ...updatedItem,
          id: duplicate[0].id
        }];
      }
      window.localStorage.setItem("cartItems", JSON.stringify(sortItems(state.items)));
    },
    removeItem: (state, action) => {
      const deleteditem = action.payload;
      state.items = deleteItem(state.items, deleteditem);
      window.localStorage.setItem("cartItems", JSON.stringify(sortItems(state.items)));
    }
  }
});

const findItem = (state, newItem) => state.filter(
  (item) => item.slug === newItem.slug
  && item.color === newItem.color
  && item.size === newItem.size
);

const deleteItem = (state, newItem) => state.filter(
  (item) => item.slug !== newItem.slug
  || item.color !== newItem.color
  || item.size !== newItem.size
);

const sortItems = (arr) => arr.sort(
  (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0)
);

export const { addItem, updateItem, removeItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;