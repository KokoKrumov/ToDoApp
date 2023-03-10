export interface ItemProps {
  id?: number;
  description: string;
  isChecked: boolean;
  color: string;
}

export interface InitialStateProps {
  items: ItemProps[];
  allItemsAreChecked: boolean;
  filtrateBy: string;
  colorPalette: string[];
}

export interface TodoItemsSelector {
  todoItems: InitialStateProps;
}

export interface filterTodoItemsProps {
  state: InitialStateProps;
  filterBy: string;
}

export interface TodoItemsState {
  todoItems: {
    items: ItemProps[];
    allItemsAreChecked: boolean;
  };
}
