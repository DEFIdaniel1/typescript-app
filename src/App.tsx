import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDos from "./components/ToDos";
import { ToDoContextProvider } from "./store/todo-context";

function App() {

return (
  <ToDoContextProvider>
    <NewToDo />
    <ToDos />
  </ToDoContextProvider>
);
}

export default App;
