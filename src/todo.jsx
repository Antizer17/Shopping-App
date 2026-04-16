import React, { useReducer, useState } from 'react';
import Todo from './unitTodo.jsx';

const ACTIONS = {
        ADD_TODO:'add-todo', 
        CHECK_OFF:'check-off',
        DELETE:'delete'   
     }
     
function reducer(state,action){
        switch(action.type){
            case ACTIONS.ADD_TODO:
                return [...state, newTodo(action.payload.name)]
            case ACTIONS.CHECK_OFF:
               return state.map((todo) => {
                    if(todo.id === action.payload.id){
                    return {...todo, completed:!todo.completed}
                    }
                    return todo
                });
            case ACTIONS.DELETE:
                return state.filter((todo) => todo.id !== action.payload.id);
        }
}
function newTodo(name){
    return({id:Date.now(),name:name, completed:false})
  }


function TodosApp(){
    
  const [todo,dispatch] = useReducer(reducer,[])
  const [name, setName] = useState('')
  function handleSubmit(e){
    e.preventDefault();
    console.log(todo)
    dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
    
  }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Todo App</h1>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} />
                <button type="submit">Add Todo</button>
            </form>
            {todo.map((t)=>  < Todo key={t.id} todo={t} dispatch={dispatch} /> )}
            
        </div>
    )
}
export { TodosApp, ACTIONS};