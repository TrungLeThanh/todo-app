import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => { 
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const todoNew = [todo,...todos];
        console.log(todo,...todos);
        window.localStorage.setItem('todos', JSON.stringify(todoNew));
        setTodos(todoNew);
    }
    

    useEffect(() =>{
        if(localStorage && !localStorage.getItem('todos')){
            return;
        }
        const data = JSON.parse(localStorage.getItem('todos'));
        setTodos(data);
    }, []);

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        // setTodos(updatedTodos);
    };

    const removeTodo = (id) => {
        const removeElement = [...todos].filter(todo => todo.id !== id);
        setTodos(removeElement);
        window.localStorage.setItem('todos', JSON.stringify(removeElement));
    };

    return (
        <div>
            <TodoForm onSubmit={addTodo} /> 
            <Todo 
                todos={todos} 
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
};

export default TodoList;
