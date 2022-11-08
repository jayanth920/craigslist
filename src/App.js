import React, { useState, useEffect } from 'react'
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [data, setData] = useState({
    title: "",
    complete: false,
  })

  const [list, setList]= useState([
    {
      title: "Wash the dishes",
      complete: false
    },
    {
      title: "Walk the dog",
      complete: false
    },
    {
      title: "Make the bed",
      complete: true
    },
  ])

  const handleDone = (value) => {
    setData({})
    value.complete = !value.complete
  }

  const handleClick = (value) => {
    setData({})
    list.push(value)
  }

return(
  <div className='App'>

<ToDoForm list={list} data={data} handleClick={handleClick} setData={setData} />
<ToDoList list={list} data={data} setData={setData} handleDone={handleDone}/>
    {/* <ToDoForm list={list}
              title={list.title}
              complete={list.complete}/> */}
  </div>
)
}

export default App;
