import React, { useState } from 'react';
import axios from 'axios';


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
        axios.post('https://burger-app-7b4b5.firebaseio.com/todos.json',{name:todoName}).
        then(Response=>
            {
                console.log(Response);
            }).
            catch(error=>{
                console.log(error);
            });
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
