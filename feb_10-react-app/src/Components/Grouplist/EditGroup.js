import React, { useState} from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom';
import updateDataToLocalStorage from '../helpComponent/updateDataToLocalStorage';

export default function EditGrouo() {
    const [searchParam]= useSearchParams();
    const [data, setData]= useState('');

    let navigate= useNavigate();

    let id = searchParam.get('id');
    let groupName = searchParam.get("groupName")

    const handleUpdate = (e) =>{
        e.preventDefault();
        let updatedData = {
            groupName: data,
          id: parseInt(id),
        }
        updateDataToLocalStorage("groupData", id, updatedData);
        navigate("/group");
        alert("data edited successfully");
        // console.log(updatedData)
    
    }
    const handleInput = (e) => {
      setData(e.target.value);
    console.log(data);

    };
  
    
    const sytle={
                color:'red',
                width: "20%",
                padding: "12px 20px",
                margin: "15px ",
                display: "inline-block",
                border:" 1px solid #ccc",
                borderRadius: '4px',
                boxSizing: "border-box",
            }
    const button ={
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
    }
  return (
    <div>
        <form>
        <h1>Edit User Details</h1>
        <input type="text"  placeholder= {searchParam.get('groupName')} onChange={(e)=>handleInput(e)} style={sytle}/>
        <button  style={button} onClick={(e)=> handleUpdate(e)}>Update</button>
        </form>
    </div>
  )
}
