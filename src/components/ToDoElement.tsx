import React from 'react';

import classes from './ToDoElement.module.css';

const ToDoElement: React.FC<{ text: string, onRemoveItem: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveItem}>
      {props.text}
    </li>
  );
};

export default ToDoElement;