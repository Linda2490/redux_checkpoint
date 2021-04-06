import React from 'react'
import { useDispatch } from "react-redux"


function Task({ toDo_task, index }) {
    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatching the toggle task action
        dispatch(toggleTask({ id: toDo_task.id }))
    return (
        
           <div>

            <h4 style={{ textDecoration: toDo_task.isDone ? "line-through" : "none" }}><span className="Task_Number">Task {Number(index) + 1}:</span> {toDo_task.task}</h4>
            <div className="taskBtns">
                <Button variant={toDo_task.isDone ? "outline-danger" : "success"} onClick={handleClick}>{toDo_task.isDone ? "Undo" : "Done"}</Button>
                
            </div>
        </div>
    )        
}
}

export default Task
