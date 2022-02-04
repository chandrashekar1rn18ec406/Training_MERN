import React from 'react'

const Header = (props) => {
  const {title} =props
  return (
      
      <h1 style={{ textAlign: "center" }}>Header : {title} </h1>  )
}

export default Header
