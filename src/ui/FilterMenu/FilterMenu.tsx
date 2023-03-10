import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColoredCard from "./../ColoredCard/ColoredCard";
import { todoItemsActions } from "../../store/todoItemsSlice";
import { RESOLVED, UNRESOLVED, ALL } from "../../shared/constants";
import { ItemProps, TodoItemsSelector } from "../../types/todoItems.type";
import styles from "./FilterMenu.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";

const FilterMenu = () => {
  const { menuItemFixWidth } = styles;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const items: ItemProps[] = useSelector((state: TodoItemsSelector) => {
    return state.todoItems.items;
  });

  const colors: string[] = useSelector((state: TodoItemsSelector) => {
    return state.todoItems.colorPalette;
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterTodoItems = (filter: string) => {
    dispatch(todoItemsActions.filtrateTodoItems(filter));
  };

  useEffect(() => {
    dispatch(todoItemsActions.updateColorFilter());
  }, [items]);

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleFilterTodoItems(RESOLVED)}>
          Resolved
        </MenuItem>
        <MenuItem onClick={() => handleFilterTodoItems(UNRESOLVED)}>
          Unresolved
        </MenuItem>
        <MenuItem onClick={() => handleFilterTodoItems(ALL)}>All</MenuItem>
        <Divider />
        <MenuItem disableTouchRipple className={menuItemFixWidth}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Select by Color
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              {colors?.length !== 0 &&
                colors?.map((color, index) => {
                  return (
                    <Grid item key={index}>
                      <ColoredCard
                        color={color}
                        onClick={() => handleFilterTodoItems(color)}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FilterMenu;
