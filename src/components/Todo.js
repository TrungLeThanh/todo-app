import React, {useState} from 'react';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {

    const [edit, setEdit] = useState({id: null, value: ''});

    const onSubmitEdit = (event, value) => {
        event.preventDefault();
        // console.log(edit.id);
        updateTodo(edit.id, value);
        setEdit({id: null, value: ''});
    };

    const showEdit = () => {
        return (
            <form className="ui form" onSubmit={onSubmitEdit}>
                <div className="field"> 
                    <input 
                        type="text" 
                        value={edit.value} 
                        onChange={e => setEdit({value: e.target.value})}
                    />
                    </div>
                </form>
            );
    };
    // console.log(edit);

    return (
        <div>
        {todos.map((todo) => 
            <div className="ui inverted segment" key={todo.id}>
                <p>{todo.text}</p>
                <i className="far fa-trash-alt" style={{marginRight: '15px'}} onClick={() => removeTodo(todo.id)}/>
                <i className="far fa-edit" onClick={() => setEdit({ id: todo.id, value: todo.text })} /> 
            </div>
        )}
        {showEdit()}</div>
    );
    
}

export default Todo;
