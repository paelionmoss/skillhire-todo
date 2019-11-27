import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  function handleKeyDown(e) {
    if (e.key === 'Enter' && inputTodo.length > 0) {
      addTodo();
    }
  }

  function addTodo() {
    let newTodos = [...todos];
    newTodos.push({content: inputTodo, completed: false});
    setTodos(newTodos);
    setInputTodo('');
  }

  function toggleCompleted(i) {
    let newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <div className='new-todo'>
        <span className='new-todo-label'>Add an item:</span>
        <TextField value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} onKeyDown={e => handleKeyDown(e)}/>
      </div>
      <div className='todo-list'>
        {todos.map((todo, i) => (
            <List>
              <ListItem key={i} onClick={() => toggleCompleted(i)}>
                
                <ListItemText className={todo.completed ? 'todo-completed' : 'todo'} primary={todo.content}/>
              </ListItem>
            </List>
          ))}
      </div>
    </div>
  );
}

export default App;
