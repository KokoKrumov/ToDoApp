import { useState } from "react";
import { DEFAULT_PRIMARY_COLOR } from "../shared/constants";
import { ItemProps } from "../types/todoItems.type";

const todoItemInit = {
  description: "",
  isChecked: false,
  color: DEFAULT_PRIMARY_COLOR,
};

const useInput = () => {
  const [todoItem, setTodoItem] = useState<ItemProps>(todoItemInit);
  const [enteredTextIsValid, setEnteredTextIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const todoItemIsInvalid = !enteredTextIsValid && isTouched;

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): boolean => {
    return todoItemIsInvalid;
  };

  return {
    setEnteredTextIsValid,
    handleChangeInput,
    todoItemIsInvalid,
    setIsTouched,
    setTodoItem,
    todoItem,
  };
};

export default useInput;
