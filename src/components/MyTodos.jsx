import React from 'react'
import { useState } from 'react'
import { todosData } from '../data'
import { Button } from '@heroui/react'
import { FaTrash } from 'react-icons/fa'
import { MdDoneOutline } from 'react-icons/md'
import { NewTodo } from './NewTodo'

export const MyTodos = () => {
  const [todos, setTodos] = useState(todosData)
  console.log(todos);

  const handleDelete=(id)=>{
    console.log(id);
    setTodos(prev=>prev.filter(obj=>obj.id!=id))
  }
  
  const handleDone=(id)=>{
    setTodos(prev=>prev.map(obj=>obj.id==id ? {...obj,done:!obj.done} : obj))
  }
  const handleAdd=(descr)=>{
     const newTodo={
      id:Date.now(),
      descr,
      done:false
     }
     setTodos(prev=>[...prev,newTodo])
  }

  return (
    <div>
      <h2 className='flex items-center flex-col p-3 max-w-3xl m-auto font-bold text-3xl'>My Todos</h2>
      <NewTodo handleAdd={handleAdd}/>
      <ul className='flex flex-col gap-3 shadow-md max-w-3xl m-auto'>
        {todos.map(({id,descr,done})=>
        <li key={id} className='flex justify-between p-5 border-b-2'>
          <Button isIconOnly variant="tertiary"  onClick={()=>handleDone(id)}>
           <MdDoneOutline style={{color:done ? 'green': 'gray'}}/>
          </Button>

          <div style={{textDecoration: done ? "line-through" :""}}>{descr}</div>

          <Button isIconOnly aria-label="Delete" variant="danger" onClick={()=>handleDelete(id)}>
            <FaTrash />
          </Button>
        </li>
        )}
      </ul>
    </div>
  )
}


