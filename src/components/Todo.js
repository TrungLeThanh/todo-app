import React, {useState} from 'react';
import Modal from 'react-modal';
import '../css/Todo.css';

const Todo = ({todos, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({id: null, value: ''});
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onSubmitEdit = () => {
        updateTodo(edit.id, edit.value);
    };


    Modal.setAppElement('#root');
    
    const showEdit = () => {
        return (
            <Modal
                isOpen={modalIsOpen} 
                style={
                    {
                        content:{
                            height: '200px',
                            width: '500px',
                            backgroundColor: '#52575C',
                            margin: '100px auto',
                        }
                    }
                }
            >
                <h3 style={{color: 'white'}}>Edit Task</h3>
                <hr />
                <form className="ui form"  style={{marginTop: '20px'}}  onSubmit={onSubmitEdit} >
                    <div className="field"> 
                        <input 
                            type="text" 
                            value={edit.value} 
                            onChange={e => setEdit({id: edit.id, value: e.target.value})}
                        />
                    </div>
                    <button className="ui green button" type="submit" onSubmit={onSubmitEdit}>Submit</button>
                    <button className="ui red button" onClick={() => setModalIsOpen(false)}>Cancel</button>
                </form>
                
            </Modal>
        );
    };

    return (
        <div>
        {todos.map((todo) => 
            <div className="ui black segment" key={todo.id+1}>
                <div className="list">
                    <p>{todo.text}</p>
                    <i className="far fa-trash-alt" style={{marginRight: '25px'}} onClick={() => removeTodo(todo.id)}/>
                    <i className="far fa-edit" onClick={() => {
                        setEdit({ id: todo.id, value: todo.text })
                        setModalIsOpen(true)
                        }
                    }/> 
                </div>
            </div>
        )}
        {showEdit()}</div>
    );
    
};

export default Todo;
