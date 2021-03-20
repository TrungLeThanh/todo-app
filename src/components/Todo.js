import React, {useState, useEffect} from 'react';

const Todo = ({todos, completeTodo, removeTodo}) => {
    
    // useEffect(() =>{
    //     window.localStorage.setItem('todos', JSON.stringify(todos));
    // });

    return todos.map((todo) => 
        <div className="ui inverted segment" key={todo.id}>
            <p>{todo.text}</p>
            <i className="far fa-trash-alt" style={{marginRight: '15px'}} onClick={() => removeTodo(todo.id)}/>
            <i className="far fa-edit" />
            {/* <button className="ui button" onClick={() => removeTodo(todo.id)}> */}
        </div>
    );
    
}

export default Todo;
