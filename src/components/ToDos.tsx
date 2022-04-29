import React, {useContext} from "react";
import ToDoElement from "./ToDoElement";
import ToDoContext from "../store/todo-context";

import classes from "./ToDos.module.css";

const ToDos: React.FC = () => {
  const todoCtx = useContext(ToDoContext);
  
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <ToDoElement
          key={item.id}
          text={item.text}
          onRemoveItem={todoCtx.removeToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;