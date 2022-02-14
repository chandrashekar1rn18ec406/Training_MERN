import React from 'react'
// import {genData }from '../../Data/generated'
// import '../Style/index.css'
import { Link } from 'react-router-dom'

export const Userlist = () => {
    let userData= JSON.parse(localStorage.getItem("userData"))
  return (
    <>
        <UserHeader/>
        <div>
      
      {
          userData.map((data,key)=>{
              return(
                  <div key={key}>
                      <UserListdata 
                      key={key}
                      id ={data.id}
                      name={data.name}
                      />
                  </div>
              );
          })
      }
    </div>
    </>
  )
}
const UserHeader = () => {
    return(
        <header className='userheader' >
            <h2>User List Details</h2>
        </header>
    );
};
const style = {borderRadius:'20px',
  padding:"20px",
  fontSize:"20px",
  fontFamily:'sans-serif'

  }


const UserListdata = ({
    id,name
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
                        <h5>{name}</h5>
                    </td>
                    <td>
                        <button style={style}>
                            <Link to={`/edituser?id=${id}&name=${name}`} >Edit</Link>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Userlist;
