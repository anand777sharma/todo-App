import React from 'react'
import "./progress.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from "react";


const Progress = () => {

    const dispatch = useDispatch();
  

    const todos = useSelector(state => state.todos);
   
    useEffect(() => {
    dispatch(getAllTodos());
    }, [dispatch])

    const getTodos = () => {
        const donetodo =todos.filter(todo => todo.done)
           return donetodo.length;
    }
 
  
   console.log(getTodos());
    const percentage = Math.floor((getTodos()/todos.length)*100)

    return (
        <>
            <div className="" style={{width:400}}>

                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 1.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `rgba(62, 152, 199)`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
            </div>

        </>
    )
}

export default Progress