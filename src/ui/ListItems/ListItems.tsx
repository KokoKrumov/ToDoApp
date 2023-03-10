import List from "@mui/material/List";
import ToDoItem from "../ToDoItem/ToDoItem";

import { useSelector } from "react-redux";
import { ItemProps, TodoItemsSelector } from "../../types/todoItems.type";
import { filterItemsBy } from "../../shared/utils/filters";
import { ALL } from "../../shared/constants";

const ListItems = () => {
  const items: ItemProps[] = useSelector((state: TodoItemsSelector) => {
    return state.todoItems.items;
  });

  const filter: string = useSelector((state: TodoItemsSelector) => {
    return state.todoItems.filtrateBy.length > 0
      ? state.todoItems.filtrateBy
      : ALL;
  });

  const showItems = filterItemsBy(items, filter);

  return (
    <List dense>
      {showItems.length === 0 && <p>No ToDo Items here!</p>}
      {showItems.map((item: ItemProps) => {
        const { id, description, isChecked, color } = item;
        return (
          <ToDoItem
            key={id}
            id={id}
            description={description}
            isChecked={isChecked}
            color={color}
          />
        );
      })}
    </List>
  );
};

export default ListItems;
