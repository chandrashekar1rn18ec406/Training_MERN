import React,{useContext} from "react";
import noteContext from "./Context";

const CallContext = () => {
    const a=useContext(noteContext)
  return (
   <div>
       this is {a.name} and {a.message}
   </div>
  )
}

export default CallContext
