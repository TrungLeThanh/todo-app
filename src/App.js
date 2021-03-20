import React from 'react';
import TodoList from './components/TodoList';

const App = () =>{
    return (
        <div className="ui container segment" style={{marginTop: '50px'}}>
            <TodoList />
        </div>
    );
};

export default App;
