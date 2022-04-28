import React from 'react';

import classes from './ToDoElement.module.css';

const ToDoElement: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default ToDoElement;