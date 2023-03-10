import { useDispatch } from "react-redux";
import { todoItemsActions } from "../../store/todoItemsSlice";
import { ItemProps } from "../../types/todoItems.type";
import styles from "./ToDoItem.module.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";

const ToDoItem = ({ id, description, isChecked, color }: ItemProps) => {
  const {
    todoItemDivider,
    todoListItemText,
    todoItemIsChecked,
    todoItemColoredDivider,
  } = styles;
  const labelId = `checkbox-list-secondary-label-${id}`;
  const dispatch = useDispatch();

  const handleToggle = (id: number | undefined) => () => {
    dispatch(todoItemsActions.toggleTodoItem(id));
  };

  const handleRemoveTodoItem = (id: number | undefined) => {
    dispatch(todoItemsActions.removeTodoItem(id));
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            onClick={() => handleRemoveTodoItem(id)}
            color="warning"
            edge="end"
            aria-label="comments"
          >
            <ClearIcon />
          </IconButton>
        }
        disablePadding
        className={isChecked ? todoItemIsChecked : ""}
      >
        <Divider
          style={{ backgroundColor: color }}
          orientation="vertical"
          flexItem
          component="span"
          className={todoItemColoredDivider}
        />
        <ListItemButton onClick={handleToggle(id)} dense>
          <ListItemIcon>
            <Checkbox
              checked={isChecked}
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          <ListItemText
            id={labelId}
            primary={description}
            className={todoListItemText}
          />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" className={todoItemDivider} />
    </>
  );
};

export default ToDoItem;
