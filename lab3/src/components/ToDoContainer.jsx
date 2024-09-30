import React,{useState} from 'react'
import AddToDoComponent from './AddToDoComponent';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  const addTodo = (title) => {
    const newTodoItem = { id: Date.now(), title };
    setTodos([...todos, newTodoItem]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
        <AddToDoComponent onAdd={addTodo} />
        <SearchInput search={search} onSearchChange={setSearch} />
        <ToDoTable todos={filteredTodos} onRemove={removeTodo} />
    </div>
  )
}

export default ToDoContainer