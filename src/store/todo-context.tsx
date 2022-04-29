import React, {useState} from "react";
import ToDo from "../models/todo";

type ToDoContextObj = {
  items: ToDo[];
  addToDo: (text: string) => void;
  removeToDo: (id: string) => void;
}

const ToDoContext = React.createContext<ToDoContextObj>({
  items: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
});

export const ToDoContextProvider = (props: any) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDoHandler = (inputText: string) => {
    const newToDoItem = new ToDo(inputText);

    setToDos((prevItems) => {
      return prevItems.concat(newToDoItem);
    });
  };

  const removeItemHandler = (todoId: string) => {
    setToDos((prevItems) => {
      return prevItems.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: ToDoContextObj = {
    items: toDos,
    addToDo: addToDoHandler,
    removeToDo: removeItemHandler,
  };

  return <ToDoContext.Provider value={contextValue}>{props.children}</ToDoContext.Provider>;
};

export default ToDoContext;