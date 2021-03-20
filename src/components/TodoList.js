import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => { 
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        console.log(todo)
        const todoNew = [todo,...todos];
        console.log(todo,...todos);
        setTodos(todoNew);
        console.log(todos)
    }

    useEffect(() =>{
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


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
