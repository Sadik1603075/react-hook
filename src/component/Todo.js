import React, { useState } from 'react';

const Todo =(props)=>
{
    const [todoName,setTodoName] = useState('');
    const [todoList,setTodoList] = useState([]);

    const inputChangeHandler =(event)=>
    {
        setTodoName(event.target.value);
    };
    const todoAddHandler =()=>
    {
        setTodoList(todoList.concat(todoName));
    };
    const keyPresshandler = event =>
    {
        if(event.keyCode === 13)
        {
            todoAddHandler();
        }
    };
    return (<React.Fragment>

        <input 
        type="text" 
        placeholder="Todo" 
        onChange={inputChangeHandler}
        value={todoName}
        onKeyPress={keyPresshandler}
        />
        <button type="submit" onClick={todoAddHandler} >Add</button>

        <ul>
            {todoList.map(todo =>
                <li key={todo}>{todo}</li>)}
        </ul>
    </React.Fragment>); 
};  

export default Todo;
