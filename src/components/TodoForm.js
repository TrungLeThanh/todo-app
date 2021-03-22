import React, {useState, useEffect} from 'react';

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
        <form className="ui form" onSubmit={onFormSubmit} style={{marginBottom: '20px'}}>
            <div className="field">
                <input 
                    type="text" 
                    value={input}
                    onChange={ e => setInput(e.target.value)}
                    placeholder="Add to do"
                />
            </div>
        </form>
    );
};

export default TodoForm;
