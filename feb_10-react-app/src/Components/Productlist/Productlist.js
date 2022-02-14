import React from 'react'
// import {product} from '../../Data/MOCK_DATA';
import { Link } from 'react-router-dom';
// import '../Style/index.css'

export const Productlist = () => {
  let productData= JSON.parse(localStorage.getItem("productData"))
  return(
    <>
    <ProductHeader/>
    <div>
      {
        productData.map((data,key)=>{
          return(
            <div key={key}>
              <ProductDatatable
              key={key}
              id ={data.id}
              car_model={data.car_model}
              company ={data.company}/>
            </div>
          )
        })
      }
    </div>
    </>
    )
}

const ProductHeader = () =>{
  return(
      <header className='userheader'>
        <h2>Product List Details</h2>
      </header>
  )
}
const style = {
  borderRadius:'20px',
  padding:"20px",
  fontSize:"20px",
  fontFamily:'sans-serif'

  }

const ProductDatatable = ({
  id,car_model,company
}) =>{
  if(!company) return <div/>
  return(
    <table>
    <tbody>
        <tr>
            <td>
                <h5>{id}</h5>
            </td>
            <td>
                <h5>{car_model}</h5>
            </td>
            <td>
              <h5>{company}</h5>
            </td>
            <td>
                <button style={style}>
                    <Link to={`/editproduct?id=${id}&car_model=${car_model}&company=${company}`} >Edit</Link>
                </button>
            </td>
        </tr>
    </tbody>
</table>
  )
}


export default Productlist
