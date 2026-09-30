import React from 'react'
import { useState } from 'react'
import { todosData } from '../data'
import { Button } from '@heroui/react'
import { FaTrash } from 'react-icons/fa'
import { MdDoneOutline } from 'react-icons/md'
import { NewTodo } from './NewTodo'
import { useEffect } from 'react'

export const MyTodos = () => {
  const [todos, setTodos] = useState(todosData)
  const [remaning, setRemaning] = useState(0)

  useEffect(() => {
   const count=todos.filter(({done})=>!done).length
   setRemaning(count)
  }, [todos])
  

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
    <div className='max-w-3xl m-auto'>
      <h2 className='flex items-center flex-col p-3  font-bold text-3xl'>My Todos</h2>
      <NewTodo handleAdd={handleAdd}/>
      <ul className='flex flex-col gap-3 shadow-md '>
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
      <div>
       { remaning>0 ? `Elvégzetlen feladatok:${remaning}`: 'Nincs több teendő'}
      </div>
    </div>
  )
}


