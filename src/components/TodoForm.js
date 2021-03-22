import React, {useState} from 'react';
import '../css/Todo.css';

const TodoForm = ({onSubmit}) => {

    const [input, setInput] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        onSubmit({
            text: input,
            id: Math.floor(Math.random() *1000)
        });

        setInput('');
    };


    return (    
        <form className="ui form success" onSubmit={onFormSubmit} style={{marginBottom: '20px'}}>
            <div className="field form-edit">
                <input 
                    type="text" 
                    value={input}
                    onChange={ e => setInput(e.target.value)}
                    placeholder="Add to do"
                    style={{width: '400px'}}
                />
                <button className="ui secondary button" type="submit" onSubmit={onFormSubmit} style={{marginLeft: '10px'}}>Add</button>
            </div>
        </form>
    );
};

export default TodoForm;
