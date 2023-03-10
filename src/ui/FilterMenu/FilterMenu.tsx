import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "./FilterMenu.module.css";
import ColoredCard from "./../ColoredCard/ColoredCard";
import useGetColors from "../../hooks/useGetColors";
import { useDispatch } from "react-redux";
import { todoItemsActions } from "../../store/todoItemsSlice";
import { RESOLVED, UNRESOLVED, ALL } from "../../shared/constants";

const FilterMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { coloredButton, menuItemFixWidth } = styles;
  const open = Boolean(anchorEl);
  const colors = useGetColors();
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterTodoItems = (filter: string) => {
    dispatch(todoItemsActions.filtrateTodoItems(filter));
  };

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
                colors?.map((colorObj, index) => {
                  const { color, name } = colorObj;
                  return (
                    <Grid item key={name + index}>
                      <ColoredCard
                        name={name}
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
