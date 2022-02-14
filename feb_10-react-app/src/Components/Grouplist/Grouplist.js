import React from 'react'
// import {groupData }from '../../Data/Group'
// import '../Style/index.css'
import { Link } from 'react-router-dom'

export const Grouplist = () => {
    let GroupData= JSON.parse(localStorage.getItem("groupData"))
  return (
    <>
        <GroupHeader/>
        <div>
      
      {
          GroupData.map((data,key)=>{
              return(
                  <div key={key}>
                      <GroupListdata 
                      key={key}
                      id ={data.id}
                      groupName={data.groupName}
                      />
                  </div>
              );
          })
      }
    </div>
    </>
  )
}
const GroupHeader = () => {
    return(
        <header className='GroupHeader' >
            <h2>User List Details</h2>
        </header>
    );
};
const style = {borderRadius:'20px',
  padding:"20px",
  fontSize:"20px",
  fontFamily:'sans-serif'

  }


const GroupListdata = ({
    id,groupName
}) =>{
    if(!id) return<div/>;
    return(
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{id}</h5>
                    </td>
                    <td>
                        <h5>{groupName}</h5>
                    </td>
                    <td>
                        <button style={style}>
                            <Link to={`/editgroup?id=${id}&groupName=${groupName}`} >Edit</Link>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Grouplist;