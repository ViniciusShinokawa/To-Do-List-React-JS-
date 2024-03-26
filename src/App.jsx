import { useState } from 'react'
import Todo from "/src/components/Todo";
import "./App.css";
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


function App() {
  
  const [todo,setTodo] = useState([
    {
      id: 1 , 
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho" , 
      isCompleted: false , 
    } ,
    {
      id: 2 , 
      text: "Ir para academia", 
      category: "Pessoal", 
      isCompleted: false,
    }, 
    {
      id: 3 , 
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]); 

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc");

  const addTodo = (text,category) => {
    const newTodos =  [
      ...todo,
      {
      id: Math.floor(Math.random() * 10000), 
      text,
      category,
      isCompleted: false,
     },
    ];
    setTodo(newTodos)
  };

  const removeTodo = (id) =>{
      const newTodos = [...todo]
      const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo: null ) 
      setTodo(filteredTodos); 
  }

  const completeTodo = (id) => { 
    const newTodo = [...todo]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo )  
    setTodo(newTodo)

  }

  return(  
  <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="Todo-list">
      {todo
      .filter((todo) => filter == "All" ? true : filter === "Completed" ? todo.isCompleted :!todo.isCompleted)
      .filter((todo) => 
      todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) :b.text.localeCompare(a.text) )
      .map((todo) =>( 
       <Todo 
       key={todo.id} 
       todo={todo} 
       removeTodo={removeTodo} 
       completeTodo = {completeTodo}/>
      ))}  
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>
 
  );
  
}

export default App
