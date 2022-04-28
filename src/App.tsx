import { useState } from "react";

import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDos from "./components/ToDos";
import ToDo from "./models/todo";

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  
  const addToDoHandler = (inputText: string) => {
    const newToDoItem = new ToDo(inputText);

    setToDos((prevItems) => {
      return prevItems.concat(newToDoItem);
    })
  }

return (
  <div>
    <NewToDo onAddToDo={addToDoHandler} />
    <ToDos items={toDos} />
  </div>
);
}

export default App;
