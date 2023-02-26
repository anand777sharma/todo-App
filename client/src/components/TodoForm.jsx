import React from 'react'
import {useState} from "react";

import { useDispatch } from 'react-redux';

import { addNewTodo } from '../redux/actions';

const TodoForm = () => {
    const[text,setText]=useState('');

    const dispatch=useDispatch();
    
const onFormSubmit =(e)=>{
    e.preventDefault();

    dispatch(addNewTodo(text));
}
const onInputChange = (e)=>{
    console.log(e.target.value);
}
    return (
        <form className="form">
            <input type="text" placeholder='enter your task' 
            className='input' 
            onChange={onInputChange}
            />
        </form>
    )
}

export default TodoForm