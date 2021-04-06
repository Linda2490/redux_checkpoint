import React from 'react'
import { Button } from "react-bootstrap"
import Task from '../Task/Task'

function ListTask() {
    const listoftodo = [
        {
            id : Math.random(),
            task : "get up at 5AM",
            isDone : false,
        },
        {
            id : Math.random(),
            task : "coding",
            isDone : false,
        },
        {
            id : Math.random(),
            task : "go to bed",
            isDone : false,
        }
    ]
    return (
        <div>
             <div>
                <Button variant="outline-success" >Show Done</Button>
                <Button variant="outline-danger" > Show Not Done</Button>
                <Button variant="info">Remove All Filters</Button>
                {listoftodo.map((task, index) => (<Task toDo_task={task} key={index} index={index} />))}
            </div>
        </div>
    )
}

export default ListTask
