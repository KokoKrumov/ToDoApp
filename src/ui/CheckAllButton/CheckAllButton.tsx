import { useDispatch, useSelector } from "react-redux";
import { todoItemsActions } from "../../store/todoItemsSlice";
import { TodoItemsState } from "../../types/todoItems.type";
import ListItemButton from "@mui/material/ListItemButton";
import styles from "./CheckAllButton.module.css";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

const CheckAllButton = () => {
  const { checkAllBox } = styles;
  const dispatch = useDispatch();

  const isChecked: boolean = useSelector(
    (state: TodoItemsState) => state.todoItems.allItemsAreChecked
  );

  const toggleCheckBoxes = () => {
    dispatch(todoItemsActions.toggleAllTodoItems(!isChecked));
  };

  return (
    <ListItemButton disableGutters onClick={toggleCheckBoxes}>
      <Grid container alignItems="center">
        <Grid item>
          <Checkbox
            checked={isChecked}
            aria-label="Mark all as done"
            className={checkAllBox}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">Mark all as done</Typography>
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default CheckAllButton;
