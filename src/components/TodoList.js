import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ListEmpty from './ListEmpty';
import '../css/TodoList.css';

const TodoList = () => { 
    const [todos, setTodos] = useState([]);
    let count = 0 ;

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
        setTodos(todos => todos.map(item => (item.id === editId ? item.text=editValue : item)));
        window.localStorage.setItem('todos', JSON.stringify(todos));
    };

    useEffect(() =>{
        if(localStorage && !localStorage.getItem('todos')){
            return ;
        }
        const data = JSON.parse(localStorage.getItem('todos'));
        setTodos(data);
    }, []);

    const showCount = () => {
        for(let i=0;i<todos.length;i++){
            if(todos[i].text && todos[i].status===false){
                count++;
            }
        }
        return <div className="ui red tag label" >{count} things to do !</div>
    }

    const completeTodo = (id) =>{
        for(let i=0;i<todos.length;i++){
            if(todos[i].id === id){
                setTodos(todos[i].status=true);
            }
        }
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    const show = () => {
        if(todos.length){
            return (
                <>
                    <Todo 
                        todos={todos} 
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        completeTodo={completeTodo}
                    />
                </>
            );
        }
        return <ListEmpty />;
    };

    
    return (
        <div>
            <div className="wrap" style={{display: 'flex', marginBottom: '-10px'}}>
                <h2 className="ui header">
                    <i className="fas fa-list-ol" style={{marginRight: '10px'}}></i>
                    <div className="content">
                        To Do List
                    </div>
                </h2>
                <hr />
                <TodoForm onSubmit={addTodo} /> 
            </div>
            <hr />
            <div style={{margin: '25px 0 25px 0'}}>
                {show()}
            </div>
            <div>
                {showCount()}
            </div>
        </div>
    );
};

export default TodoList;