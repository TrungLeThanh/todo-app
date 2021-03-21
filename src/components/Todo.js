import React from 'react';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    return todos.map((todo) => 
        <div className="ui inverted segment" key={todo.id}>
            <p>{todo.text}</p>
            <i className="far fa-trash-alt" style={{marginRight: '15px'}} onClick={() => removeTodo(todo.id)}/>
            <i className="far fa-edit" onClick={() =>updateTodo(todo.id)}/>
        </div>
    );
    
}

export default Todo;
