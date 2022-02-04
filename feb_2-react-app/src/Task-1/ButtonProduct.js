import React from 'react';
// import Product from './Product';
import './Bstyle.css'
import Header from './Header';
import Footer from './Footer';


class ButtonProduct extends React.Component{
  state = {
    users: [],
    isDataLoaded: false,
    indivisualData: {},
    isIndiLoaded: false,
  };
  componentDidMount() {
    fetch("https://reqres.in/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userdata = data.data;
        this.setState({ users: userdata, isDataLoaded: true });
      });
  }

  render() {

    let elementStyle ={
      display: "flex",
      justifyContent: "space-between",
     
    }
    let buttonStyle ={
      borderRadius: "10px",
      backgroundColor: "#677223",
      border: "none",
      color: "white",
      padding: "10px" ,
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px",
      cursor: "pointer"
    }
    const { users, isDataLoaded, indivisualData, isIndiLoaded } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "#4d6c7d" }}>
          This is Product Data
        </h1>
        <table
          style={{ marginTop: "30px",border: "1px solid black",
          margin: "auto", marginLeft: "auto", marginRight: "auto" }}
        >
          
          {users.map((eachuser) => (
            <div style={elementStyle}>
              <span>{eachuser.id}</span>
              <span>{eachuser.name}</span>
              <span>
                <button style={buttonStyle}
                  onClick={() => {
                    this.setState({
                      indivisualData: eachuser,
                      isIndiLoaded: true,
                    });
                  }}
                >
                  more details
                </button>
              </span>
              
            </div>
          ))}
</table>
<div>
          {indivisualData && isIndiLoaded ? (
            <div id="table1">
              <div>  <Header title={indivisualData.name}/></div>
              <p style={{textAlign:"center"}}>Detailed View</p>

              <table  >
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Pantone Value</td>
                  </tr>
                  <tr>
                    <td>{indivisualData.id}</td>
                    <td>{indivisualData.name}</td>
                    <td>{indivisualData.year}</td>
                    <td>{indivisualData.color}</td>
                    <td>{indivisualData.pantone_value}</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
        <Footer/>
      </div>
    );
  }
}
export default ButtonProduct;
