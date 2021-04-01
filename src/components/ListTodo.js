import React, {useState} from 'react';
import Modal from 'react-modal';


const CompletedTodo = ({todos, removeTodo, updateTodo, completeTodo}) => {

    const [edit, setEdit] = useState({id: null, value: ''});
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onSubmitEdit = (event) => {
        // console.log(edit);
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
                            required
                        />
                    </div>
                    <button className="ui green button" type="submit" onChange={onSubmitEdit}>Submit</button>
                    <button className="ui red button" onClick={() => setModalIsOpen(false)}>Cancel</button>
                </form>
            </Modal>
        );
    };

    const statusTodo = (id) =>{
        completeTodo(id);
    };

    const show = () => {
        return todos.map((todo) =>{
            if(todo.status === false){
                return (
                    <div className="ui black raised segment" key={todo.id+1}>
                        <div className="list">
                            <p>{todo.text}</p>
                            <i className="far fa-trash-alt" style={{marginRight: '50px', color: '#CA4832'}} onClick={() => removeTodo(todo.id)}/>
                            <i className="far fa-edit" onClick={() => {
                                setEdit({ id: todo.id, value: todo.text })
                                setModalIsOpen(true)
                                }}
                                style={{marginRight: '22px'}}
                            /> 
                            <input className="far" type="checkbox" checked={`${todo.status ? 'checked' : ''}`} onChange={() => statusTodo(todo.id)} />
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
            {showEdit()}
        </div>
    );
};

export default CompletedTodo;
