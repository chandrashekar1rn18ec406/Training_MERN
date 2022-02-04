import React from "react";
import './Bstyle.css'
import Header from "./Header";
import Footer from "./Footer";


class Button extends React.Component {
  state = {
    users: [],
    isDataLoaded: false,
    indivisualData: {},
    isIndiLoaded: false,
  };
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
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
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      padding: "7px" ,
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
          This is User Data
        </h1>
        <table
          style={{ marginTop: "30px", marginLeft: "auto", marginRight: "auto" }}
        >
          
          {users.map((eachuser) => (
            <div style={elementStyle}>
             
              <span>{eachuser.id}</span>
              <span>{eachuser.email}</span>
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
          <div>  <Header title={indivisualData.first_name}/></div>
             
              
              {/* <p style={{textAlign:"center"}}>Detailed View</p> */}
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
                    <td>{indivisualData.email}</td>
                    <td>{indivisualData.first_name}</td>
                    <td>{indivisualData.last_name}</td>
                    <td>
                      <img src={indivisualData.avatar} alt="pic" />
                    </td>
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
export default Button;
