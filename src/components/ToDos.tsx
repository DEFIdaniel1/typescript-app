import React from 'react'
import ToDo from '../models/todo'
import ToDoElement from './ToDoElement'

import classes from './ToDos.module.css';

const ToDos: React.FC<{items: ToDo[]}> = (props) => {
    return (
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <ToDoElement key={item.id} text={item.text} />
        ))}
      </ul>
    );
}

export default ToDos