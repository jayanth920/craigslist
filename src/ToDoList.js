import React, { useEffect, useState } from 'react'


function ToDoList(props) {

    console.log(props.list);
    let list = props.list.map((todo, index) => {
        return <div onClick={() => {props.handleDone(todo)}} >{todo.title} done:{todo.complete ? "yes" : "no"}</div>
    })


    return (
        <div>
            {list}
        </div>
    )
}

export default ToDoList