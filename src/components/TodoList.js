import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ListEmpty from './ListEmpty';
import EditTodo from './EditTodo';

const TodoList = () => { 
    const [todos, setTodos] = useState([]);
    // const [edit, setEdit] = useState('');

    const addTodo = (todo) => {
        const todoNew = [todo,...todos];
        window.localStorage.setItem('todos', JSON.stringify(todoNew));
        setTodos(todoNew);
    }


    useEffect(() =>{
        if(localStorage && !localStorage.getItem('todos')){
            return ;
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
        setTodos(updatedTodos);
    };

    const removeTodo = (id) => {
        const removeElement = [...todos].filter(todo => todo.id !== id);
        setTodos(removeElement);
        window.localStorage.setItem('todos', JSON.stringify(removeElement));
    };

    const updateTodo = (editId, editValue) => {
        // console.log(todos);
        todos.map(todo =>{
            if(todo.id === editId){
                return console.log('oke');
            }
            return 'noooo';
        })

    };
    
    // const onSubmited = (event) => {
    //     event.preventDefault();
    //     // setTodos(todos);
    //     // console.log(todos[0].text);
    //     const 
    //     setTodos(todos[0].text);
    // }

    // const showEdit = () => {
    //     return (
    //         <form className="ui form" onSubmit={onSubmited} key="edit">
    //             <div className="field"> 
    //                 <input 
    //                     type="text" 
    //                     value={edit} 
    //                     onChange={e => setEdit(e.target.value)}
    //                 />
    //             </div>
    //         </form>
    //     );
    // }


    const show = () => {
        if(todos.length){
            return (
                <Todo 
                    todos={todos} 
                    completeTodo={completeTodo}
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
            {/* {showEdit()} */}
        </div>
    );
};

export default TodoList;
