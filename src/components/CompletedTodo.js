import React from 'react';

const CompletedTodo = ({todos}) => {

    const show = () => {
        return todos.map((todo) =>{
            if(todo.status){
                return (
                    <div className="ui black raised segment" key={todo.id+1} style={{opacity: '0.3'}}>
                        <div className="list">
                            <p style={{textDecoration: 'line-through'}}>{todo.text}</p>
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
