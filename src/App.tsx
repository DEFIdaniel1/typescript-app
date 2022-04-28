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

  const removeItemHandler = (todoId: string) => {
    setToDos((prevItems) => {
      return prevItems.filter(todo => todo.id !== todoId);
    })
  };

return (
  <div>
    <NewToDo onAddToDo={addToDoHandler} />
    <ToDos items={toDos} onRemoveItem={removeItemHandler} />
  </div>
);
}

export default App;
