import React, {useState} from 'react';

const EditTodo = ({text}) => {
    const [input, setInput] = useState(text);
    return (
        <form className="ui form">
            <div className="field">
                <input 
                    type="text" 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
            </div>
        </form>
    );
};

export default EditTodo;

