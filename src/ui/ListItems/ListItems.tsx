import { useSelector } from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";
import { ItemProps, TodoItemsSelector } from "../../types/todoItems.type";
import { colorsMapProps } from "../../types/colors.type";
import { filterItemsBy } from "../../shared/utils/filters";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import useGetColors from "./../../hooks/useGetColors";
import { colorsMap } from "../../shared/constants";
import { colors } from "./../../../.history/src/shared/constants_20230312130358";

const ListItems = () => {
  const colors = useGetColors();

  const items: ItemProps[] = useSelector((state: TodoItemsSelector) => {
    return state.todoItems.items;
  });

  const filter: string = useSelector((state: TodoItemsSelector) => {
    return state.todoItems.filtrateBy;
  });

  const showItems = filterItemsBy(items, filter);

  const generateFilterLabel = () => {
    const colorExist = colors?.find((color) => color.color === filter);

    if (colorExist) {
      const selectedColor = colorExist.name;
      // @ts-ignore: Unreachable code error
      const colorName = colorsMap[selectedColor];

      return `${colorName} color`;
    }

    return filter;
  };

  const filterLabel = generateFilterLabel();

  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Showing{" "}
        <u>
          <b>{filterLabel}</b>
        </u>{" "}
        items
      </Typography>
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
    </>
  );
};

export default ListItems;
