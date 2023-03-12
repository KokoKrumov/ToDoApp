import { useState } from "react";
import { useDispatch } from "react-redux";
import useGetColors from "../../hooks/useGetColors";
import { todoItemsActions } from "../../store/todoItemsSlice";
import { AddNewTodoModalProps } from "../../types/modal.type";
import { ItemProps } from "../../types/todoItems.type";
import ColoredCard from "../ColoredCard/ColoredCard";
import { checkInputFields } from "../../shared/utils/checkInputFields";
import { DEFAULT_PRIMARY_COLOR } from "../../shared/constants";
import styles from "./AddNewTodoModal.module.css";
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

const AddNewTodoModal = ({ open, handleClose }: AddNewTodoModalProps) => {
  const todoItemInit = {
    description: "",
    isChecked: false,
    color: DEFAULT_PRIMARY_COLOR,
  };
  const [todoItem, setTodoItem] = useState<ItemProps>(todoItemInit);
  const [enteredTextIsValid, setEnteredTextIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const todoItemIsInvalid = !enteredTextIsValid && isTouched;

  const { todoItemColoredDivider } = styles;
  const colors = useGetColors();
  const dispatch = useDispatch();

  const submitNewTodoItem = () => {
    setIsTouched(true);

    if (todoItem.description === "") {
      setEnteredTextIsValid(false);
      return;
    }
    setEnteredTextIsValid(true);
    dispatch(todoItemsActions.addTodoItem(todoItem));
    handleCloseModal();
  };

  const handleTodoDescriptionOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = e.target.value.trim();
    const isValid: boolean = checkInputFields(value);
    setEnteredTextIsValid(isValid);
    setTodoItem({
      ...todoItem,
      description: value,
    });
  };

  const handleTodoColor = (color: string) => {
    setTodoItem({
      ...todoItem,
      color: color,
    });
  };

  const handleCloseModal = () => {
    handleClose();
    setIsTouched(false);
    setTodoItem(todoItemInit);
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
              error={todoItemIsInvalid}
              helperText={todoItemIsInvalid ? "Incorrect entry." : ""}
              onChange={handleTodoDescriptionOnChange}
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
        <Button variant="contained" color="success" onClick={submitNewTodoItem}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewTodoModal;
