import React, { useState} from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom';
import updateDataToLocalStorage from '../helpComponent/updateDataToLocalStorage';

export default function EditProduct() {
  const [searchParam] =useSearchParams()
  const [data, setData] =useState('')

  let navigate =useNavigate ();

  let id = searchParam.get('id');
  let company = searchParam.get("company")

  const handleUpdate = (e) =>{
    e.preventDefault();
    let updatedData={
      id : parseInt(id),
      car_model:data,
      company: company

    }
    updateDataToLocalStorage ('productData', id,updatedData);
    navigate('/product');
    alert("Data Sucessfully Added")
    console.log(updatedData)
  }
  const handleInput =(e)=>{
      setData(e.target.value);
      console.log(data);
  }
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
        <h1>Edit Product Details</h1>
        <input type="text" placeholder={searchParam.get('car_model')} onChange={(e)=>handleInput(e)} style={sytle}/>
        <button  style={button} onClick={(e)=>handleUpdate(e)}>Update</button>
        </form>
    </div>
  )
}
