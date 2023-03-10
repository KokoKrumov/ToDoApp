import { Dispatch } from "redux";
import { todoItemsActions } from "./todoItemsSlice";

export const fetchTodoItems = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch ToDo Items!");
      }

      const data = await response.json();

      return data.slice(0, 5);
    };

    try {
      const todoItemData = await fetchData();
      dispatch(todoItemsActions.replaceList(todoItemData));
    } catch (error) {
      console.error("Could not fetch ToDo Items!");
    }
  };
};
