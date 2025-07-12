import { useEffect, useState } from 'react'
import './App.css'
import {todoContext , useTodo , TodoProvider} from './Context/index'
import {Form , TodoItem} from './components/index'

function App() {
  const [todos , setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prev) => [{id:Math.floor(Math.random() * 100),...todo} , ...prev]);
  };
  const deleteTodo = (id)=>{
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));

  };
  const editTodo = (id , todo)=>{
    setTodos((prev)=> (prev.map( (prevTodo) => (prevTodo.id === id? todo: prevTodo))))
  };
  const toggleCompleted = (id)=>{
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo , completed : !todo.completed}:todo));
  };

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0){setTodos(todos)};
  } , [])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos));
  } , [todos])


  return (
    <TodoProvider value={{todos , addTodo , deleteTodo , editTodo , toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <Form/>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {todos.map((todo) => 
                  (<div key = {todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                    </div>))}
            </div>
        </div>
    </div>
    </TodoProvider>
  )
}

export default App
