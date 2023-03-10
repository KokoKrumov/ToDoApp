import { ItemProps } from "../../types/todoItems.type";
import { RESOLVED, UNRESOLVED, ALL } from "../constants";

export const filterItemsBy = (items: ItemProps[], filterBy: any) => {
  const newItems = items?.filter((item: ItemProps) => {
    switch (filterBy) {
      case RESOLVED:
        return item["isChecked" as keyof ItemProps];
      case UNRESOLVED:
        return !item["isChecked" as keyof ItemProps];
      case ALL:
        return item;
      default:
        return item["color" as keyof ItemProps] === filterBy;
    }
  });

  return newItems;
};
