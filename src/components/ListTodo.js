import React from 'react';

const CompletedTodo = ({todos}) => {

    const show = () => {
        return todos.map((todo) =>{
            if(todo.status === false){
                return (
                    <div className="ui black raised segment" key={todo.id+1}>
                        <div className="list">
                            <p>{todo.text}</p>
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
