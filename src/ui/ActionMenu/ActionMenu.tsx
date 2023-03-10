import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CheckAllButton from "../CheckAllButton/CheckAllButton";
import FilterMenu from "./../FilterMenu/FilterMenu";
import styles from "./ActionMenu.module.css";

const ActionMenu = () => {
  const { actionMenuCard, actionMenuToolbar } = styles;

  return (
    <Card className={actionMenuCard}>
      <Toolbar disableGutters className={actionMenuToolbar}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <CheckAllButton />
          </Grid>
          <Grid item>
            <FilterMenu />
          </Grid>
        </Grid>
      </Toolbar>
    </Card>
  );
};

export default ActionMenu;
