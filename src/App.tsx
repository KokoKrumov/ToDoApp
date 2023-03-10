import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ActionButtons from "./ui/ActionButtons/ActionButtons";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ActionMenu from "./ui/ActionMenu/ActionMenu";
import ListItems from "./ui/ListItems/ListItems";
import Wrapper from "./ui/Wrapper/Wrapper";
import Header from "./ui/Header/Header";
import theme from "./shared/styles/theme";
import { fetchTodoItems } from "./store/todoItemsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchTodoItems());
  }, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper>
          <Header title="ToDoList" />
          <ActionMenu />
          <ListItems />
          <ActionButtons />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
