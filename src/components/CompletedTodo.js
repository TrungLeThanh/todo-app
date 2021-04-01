import React from 'react';

const CompletedTodo = ({todos, removeTodo}) => {

    const show = () => {
        return todos.map((todo) =>{
            if(todo.status){
                return (
                    <div className="ui black raised segment" key={todo.id+1} style={{opacity: '0.3'}}>
                        <div className="list">
                            <p style={{textDecoration: 'line-through'}}>{todo.text}</p>
                            <i className="far fa-trash-alt" style={{color: '#CA4832'}} onClick={() => removeTodo(todo.id)}/>
                        </div>
                    </div>
                )
            }
        }
        )
    };

    return (
        <div>
            {show()}
        </div>
    );
};

export default CompletedTodo;
