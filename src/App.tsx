import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./shared/styles/theme";
import ActionMenu from "./ui/ActionMenu/ActionMenu";
import Wrapper from "./ui/Wrapper/Wrapper";
import Header from "./ui/Header/Header";
import ListItems from "./ui/ListItems/ListItems";
import ActionButtons from "./ui/ActionButtons/ActionButtons";
import { useEffect } from "react";
import { fetchTodoItems } from "./store/todoItemsActions";
import { useDispatch } from "react-redux";

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
