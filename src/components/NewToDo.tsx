import React, {useRef, useContext} from 'react'
import ToDoContext from '../store/todo-context';

import classes from './NewToDo.module.css';

const NewToDo: React.FC = () => {
    const toDoInputRef = useRef<HTMLInputElement>(null);
    const todoCtx = useContext(ToDoContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredToDo = toDoInputRef.current!.value;

        if(enteredToDo.trim().length === 0) {
            //throw error if empty or don't execute
            return;
        }
        todoCtx.addToDo(enteredToDo);
    }

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="text">To Do Text</label>
        <input type="text" id="text" ref={toDoInputRef} />
        <button>Add To Do</button>
      </form>
    );
}

export default NewToDo