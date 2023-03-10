import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import styles from "./ToDoItem.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { todoItemsActions } from "../../store/todoItemsSlice";
import { useDispatch } from "react-redux";
import { ItemProps } from "../../types/todoItems.type";

const ToDoItem = ({ id, description, isChecked, color }: ItemProps) => {
  const {
    todoItemDivider,
    todoListItemText,
    todoItemIsChecked,
    todoItemColoredDivider,
  } = styles;
  const labelId = `checkbox-list-secondary-label-${id}`;
  const dispatch = useDispatch();

  const handleToggle = (id: number) => () => {
    dispatch(todoItemsActions.toggleTodoItem(id));
  };

  const handleRemoveTodoItem = (id: number) => {
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
