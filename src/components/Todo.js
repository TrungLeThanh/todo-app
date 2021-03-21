import React, {useState} from 'react';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {

    const [edit, setEdit] = useState({id: null, value: ''});

    const onSubmitEdit = (event) => {
        updateTodo(edit.id, edit.value);
        // setEdit({id: null, value: ''});
        // console.log(edit.id);
    };

    const showEdit = () => {
        return (
            <form className="ui form" onSubmit={onSubmitEdit}>
                <div className="field"> 
                    <input 
                        type="text" 
                        value={edit.value} 
                        onChange={e => setEdit({id: edit.id, value: e.target.value})}
                    />
                    </div>
                </form>
            );
    };

    return (
        <div>
        {todos.map((todo) => 
            <div className="ui inverted segment" key={todo.id+1}>
                <p>{todo.text}</p>
                <i className="far fa-trash-alt" style={{marginRight: '15px'}} onClick={() => removeTodo(todo.id)}/>
                <i className="far fa-edit" onClick={() => setEdit({ id: todo.id, value: todo.text })} /> 
            </div>
        )}
        {showEdit()}</div>
    );
    
}

export default Todo;
