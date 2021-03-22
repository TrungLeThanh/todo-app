import React from 'react';
import TodoList from './components/TodoList';
import './css/App.css';

const App = () =>{
    return (
        <div className="ui container black segment" style={{marginTop: '50px', width: '70%', padding: '25px 40px 10px 40px'}}>
            <TodoList />
        </div>
    );
};

export default App;
