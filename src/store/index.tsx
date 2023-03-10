import { configureStore } from "@reduxjs/toolkit";
import todoItemsSlice from "./todoItemsSlice";

const store = configureStore({
  reducer: {
    todoItems: todoItemsSlice.reducer,
  },
});

export default store;
