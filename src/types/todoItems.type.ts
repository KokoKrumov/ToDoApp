export interface filterTodoItemsProps {
  state: InitialStateProps;
  filterBy: string;
}

export interface InitialStateProps {
  allItemsAreChecked: boolean;
  filtratedItems: ItemProps[];
  colorPalette: string[];
  filtrateBy: string;
  items: ItemProps[];
}
export interface ItemProps {
  description: string;
  isChecked: boolean;
  color: string;
  id?: number;
}

export interface TodoItemsSelector {
  todoItems: InitialStateProps;
}

export interface TodoItemsState {
  todoItems: {
    allItemsAreChecked: boolean;
    items: ItemProps[];
  };
}
