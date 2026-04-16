import React from 'react'
import { useReducer, useState } from 'react';
import { ACTIONS } from './todo.jsx';

const Todo = ({ todo, dispatch }) => {
return(
    <div>
        <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.name}
        </h3>
        <button onClick={() => dispatch({type:ACTIONS.CHECK_OFF, payload:{id:todo.id}})}>Check Off</button>
        <button onClick={() => dispatch({type:ACTIONS.DELETE, payload:{id:todo.id}})}>Delete</button>
    </div>
)
}
export default Todo;