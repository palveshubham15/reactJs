import { createContext , useContext } from "react";

export const todoContext = createContext({
    todos:{
        id:1,
        todo:"msg",
        completed:false
    },
    addTodo:(todo)=>{},
    editTodo:(id , todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
});

export const useTodo = ()=>{
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;