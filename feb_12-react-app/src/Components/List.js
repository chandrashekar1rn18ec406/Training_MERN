import React,{useContext} from 'react'
import Listitem from './Listitem';
import { DataContext } from './DataProvider';

export default function List() {
  const [todos,setTodos]=useContext(DataContext);
  console.log(todos);
  
  const switchComplete= (id) =>{
// alert(id)  
    const newTodos =[...todos]
    newTodos.forEach((todo,index)=>{
      if(index === id){
        todo.complete =!todo.complete
      }
    })
    setTodos(newTodos)
  }
  
  return (
    <ul>
        {
          todos.map((todo,index)=>(
            <Listitem todo={todo} key={index} id={index} checkComplete={switchComplete} />
          ))
        }
    </ul>
  )
}
