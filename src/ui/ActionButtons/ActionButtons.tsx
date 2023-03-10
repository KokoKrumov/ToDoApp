import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid } from "@mui/material";
import AddNewTodoModal from "../AddNewTodoModal/AddNewTodoModal";
import { todoItemsActions } from "../../store/todoItemsSlice";

const ActionButtons = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const dispatch = useDispatch();

  const removeAllTodoItems = () => {
    dispatch(todoItemsActions.removeAllTodoItems());
  };

  return (
    <Grid container spacing={2} justifyContent="flex-end">
      <Grid item>
        <Button
          variant="outlined"
          color="error"
          disabled={false}
          onClick={removeAllTodoItems}
        >
          Remove ALL
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Add New
        </Button>
        <AddNewTodoModal open={open} handleClose={handleCloseModal} />
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
