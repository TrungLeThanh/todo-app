import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ListEmpty from './ListEmpty';
import '../css/TodoList.css';
import CompletedTodo from './CompletedTodo';
import ListTodo from './ListTodo';

const TodoList = () => { 
    const [todos, setTodos] = useState([]);
    let count = 0 ;
    const [time, setTime] = useState('');
    const [active, setActive] = useState(1);
    const [activeButton, setActiveButton] = useState(1);

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
        const data = todos.map((item) => item.id === editId ? item.text= editValue : item);
        setTodos(data);
        window.localStorage.setItem('todos', JSON.stringify(todos));
    };


    const showCount = () => {
        for(let i=0;i<todos.length;i++){
            if(todos[i].text && todos[i].status===false){
                count++;
            }
        }
        return <div className="ui red tag label" >{count} things to do !</div>
    }

    const completeTodo = (id) =>{
        todos.forEach(item => item.id === id ? item.status=!item.status : item);
        window.localStorage.setItem('todos', JSON.stringify(todos));
        const data = JSON.parse(localStorage.getItem('todos'));
        setTodos(data);
    }
    
    useEffect(() =>{
        if(localStorage && !localStorage.getItem('todos')){
            return ;
        }
        const data = JSON.parse(localStorage.getItem('todos'));
        setTodos(data);
    }, []);

    const show = () => {
        if(active===2){
            return <CompletedTodo 
                        todos={todos} 
                        removeTodo={removeTodo}
                    />;
        }
        else if(active===3){
            return <ListTodo 
                        todos={todos}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        completeTodo={completeTodo}   
                    />
        }
        else if(todos.length){
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

    useEffect(() =>{
        setInterval( () => {
            setTime(new Date().toLocaleTimeString())
        },1000)
    }, [])
    
    const showAll = ()=>{
        setActive(1);
        setActiveButton(1);
    }
    const showCompleted = ()=>{
        setActive(2);
        setActiveButton(2);
    } 
    
    const showList = ()=>{
        setActive(3);
        setActiveButton(3);
    }

    
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
            <div style={{marginBottom: '20px'}}>
                {showCount()}
                <span style={{float: 'right'}} className="task">
                    <button className={`ui ${activeButton === 1 ? 'red' : ''} button`} onClick={showAll}>All</button>
                    <button className={`ui ${activeButton === 2 ? 'red' : ''} button`} onClick={showCompleted}>Completed</button>
                    <button className={`ui ${activeButton === 3 ? 'red' : ''} button`} onClick={showList}>List Todo</button>
                    <div className="ui label">
                        <i className="clock icon"></i>
                        {time}
                    </div>
                </span> 
            </div>
        </div>
    );
};

export default TodoList;