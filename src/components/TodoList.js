import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ListEmpty from './ListEmpty';

const TodoList = () => { 
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const todoNew = [todo,...todos];
        window.localStorage.setItem('todos', JSON.stringify(todoNew));
        setTodos(todoNew);
    }

    const removeTodo = (id) => {
        const removeElement = [...todos].filter(todo => todo.id !== id);
        setTodos(removeElement);
        window.localStorage.setItem('todos', JSON.stringify(removeElement));
    };

    const updateTodo = (editId, editValue) => {
        console.log(editValue);
        console.log(editId);
        console.log(todos[2]);
        setTodos(todos => todos.map(item => (item.id === editId ? item.text=editValue : item)));
        window.localStorage.setItem('todos', JSON.stringify(todos));
        console.log(todos);
    };


    useEffect(() =>{
        if(localStorage && !localStorage.getItem('todos')){
            return ;
        }
        const data = JSON.parse(localStorage.getItem('todos'));
        setTodos(data);
    }, []);
    
    const show = () => {
        if(todos.length){
            return (
                <Todo 
                    todos={todos} 
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            );
        }
        return <ListEmpty />;
    };

    
    return (
        <div>
            <TodoForm onSubmit={addTodo} /> 
            {show()}
        </div>
    );
};

export default TodoList;
