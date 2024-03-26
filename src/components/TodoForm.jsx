import {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const[value,setValue] = useState("");
  const[category,SetCategory] = useState("");

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value,category);
    setValue("")
    SetCategory("")
    
  }

  return (
    <div className='todo-form'>
      <h2 >Criar Tarefas</h2>
        <form onSubmit={handleSubmit}> 
          <input 
          type="text"
          placeholder='Digite o titulo' 
          value={value}
          onChange={(e) => setValue(e.target.value)}/>
          <select value={category} onChange={(e) => SetCategory(e.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Pessoal">Pessoal</option>
          </select>
          <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm
