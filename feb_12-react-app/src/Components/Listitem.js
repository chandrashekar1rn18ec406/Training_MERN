import React, { useState } from 'react'

export default function Listitem({todo,id,checkComplete}) {
  const [onEdit, setOnEdit]=useState(false)
  const handleOnEdit =() =>{
    setOnEdit(true)
  }
  if(onEdit){
    return (
      <li>
              
                <input type="text" id={id} checked={todo.complete} onChange={()=>checkComplete(id)} />

             
              <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
       </li>
    )

  }else{
    return (
      <li>
              <label htmlFor={id} className={todo.complete? 'active':''} >
                <input type="checkbox" id={id} checked={todo.complete} onChange={()=>checkComplete(id)} />
               {todo.name}
              </label>
              <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
       </li>
    )

  }
  
}
