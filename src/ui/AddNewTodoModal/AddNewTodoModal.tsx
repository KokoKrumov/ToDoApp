import useGetColors from "../../hooks/useGetColors";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Dialog,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import ColoredCard from "../ColoredCard/ColoredCard";
import { useDispatch } from "react-redux";
import { todoItemsActions } from "../../store/todoItemsSlice";
import { useState } from "react";
import styles from "./AddNewTodoModal.module.css";
import { AddNewTodoModalProps } from "../../types/modal.type";
import { ItemProps } from "../../types/todoItems.type";
import { DEFAULT_PRIMARY_COLOR } from "../../shared/constants";

const AddNewTodoModal = ({ open, handleClose }: AddNewTodoModalProps) => {
  const todoItemInit = {
    description: "",
    isChecked: false,
    color: DEFAULT_PRIMARY_COLOR,
  };
  const [todoItem, setTodoItem] = useState<ItemProps>(todoItemInit);
  const [isNotTodoItemValid, setIsNotTodoItemValid] = useState<boolean>();

  const { todoItemColoredDivider } = styles;
  const colors = useGetColors();
  const dispatch = useDispatch();

  const addNewItem = () => {
    if (todoItem.description.length !== 0) {
      dispatch(todoItemsActions.addTodoItem(todoItem));
      handleCloseModal();
    } else {
      setIsNotTodoItemValid(true);
    }
  };

  const handleTodoDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.target.value.length !== 0) {
      setIsNotTodoItemValid(false);
    }
    setTodoItem({
      ...todoItem,
      description: e.target.value,
    });
  };

  const handleTodoColor = (color: string) => {
    setTodoItem({
      ...todoItem,
      color: color,
    });
  };

  const handleCloseModal = () => {
    setTodoItem(todoItemInit);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle>Add New</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs="auto">
            <Divider
              style={{ backgroundColor: todoItem.color }}
              orientation="vertical"
              component="div"
              className={todoItemColoredDivider}
            />
          </Grid>
          <Grid item xs>
            <TextField
              autoFocus
              margin="dense"
              id="ToDo"
              label="ToDo"
              type="text"
              fullWidth
              variant="standard"
              error={isNotTodoItemValid}
              helperText={isNotTodoItemValid ? "Incorrect entry." : ""}
              onChange={handleTodoDescription}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Pick a color
        </Typography>
        <Grid container spacing={2}>
          {colors?.length !== 0 &&
            colors?.map((colorObj, index) => {
              const { color, name } = colorObj;
              return (
                <Grid item key={name + index}>
                  <ColoredCard color={color} onClick={handleTodoColor} />
                </Grid>
              );
            })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="success" onClick={addNewItem}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewTodoModal;
