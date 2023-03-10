import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./Wrapper.module.css";
import { WrapperProps } from "../../types/wrapp.type";

const Wrapper = ({ children }: WrapperProps) => {
  const { paper } = styles;

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs>
        <Container maxWidth="md">
          <Paper elevation={3} className={paper}>
            {children}
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Wrapper;
