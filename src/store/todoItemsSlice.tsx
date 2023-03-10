import { createSlice } from "@reduxjs/toolkit";
import { ItemProps, InitialStateProps } from "../types/todoItems.type";
import { DEFAULT_PRIMARY_COLOR } from "../shared/constants";

const initialState: InitialStateProps = {
  items: [],
  allItemsAreChecked: false,
  filtrateBy: "",
  colorPalette: [],
};

const todoItemsSlice = createSlice({
  name: "todoItemsSlice",
  initialState,
  reducers: {
    replaceList(state, action) {
      const newItems = action.payload;
      state.items = newItems.map((item: { title: string; id: number }) => {
        return {
          id: item.id,
          description: item.title,
          isChecked: false,
          color: DEFAULT_PRIMARY_COLOR,
        };
      });
    },
    addTodoItem(state, action) {
      const newItem: ItemProps = action.payload;

      state.items.push({
        id: new Date().getTime(),
        description: newItem.description,
        isChecked: newItem.isChecked,
        color: newItem.color,
      });
    },
    removeTodoItem(state, action) {
      const id: number = action.payload;
      const existingItem = state.items.find(
        (item: ItemProps) => item.id === id
      );

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    removeAllTodoItems(state) {
      state.items.length = 0;
      state.allItemsAreChecked = false;
    },
    toggleTodoItem(state, action) {
      const id: number = action.payload;
      state.items.forEach((item: ItemProps) => {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
        }
      });
      const allTodoItemsAreSelected = state.items.every((el) => el.isChecked);
      if (allTodoItemsAreSelected) {
        state.allItemsAreChecked = true;
      } else {
        state.allItemsAreChecked = false;
      }
    },
    toggleAllTodoItems(state, action) {
      const isChecked = action.payload;
      state.items = state.items.map((item: ItemProps) => {
        return (item = { ...item, isChecked: isChecked });
      });
      state.allItemsAreChecked = isChecked;
    },
    filtrateTodoItems(state, action) {
      const filter = action.payload;
      state.filtrateBy = filter;
    },
    updateColorFilter(state) {
      const allColors = state.items.map((item: ItemProps) => item.color);
      const uniqueColors = allColors.filter((e, i, a) => a.indexOf(e) == i);
      state.colorPalette = uniqueColors;
    },
  },
});

export const todoItemsActions = todoItemsSlice.actions;

export default todoItemsSlice;
