import React, { Component } from "react";

export default class TaskFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  handleChange = (e) => {
    // console.log(e.target.name +"-> "+e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log("dfg");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    localStorage.setItem("data", JSON.stringify(this.state));
  };
  render() {
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
  };
  const sytle = {
    color:'red',
    width: "30%",
    padding: "12px 20px",
    margin: "15px ",
    display: "inline-block",
    border:" 1px solid #ccc",
    borderRadius: '4px',
    boxSizing: "border-box",
};
    return (
      <div>
        <div>
        <h1>Task-1</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label style={{fontSize:'20px'}} htmlFor="">
            Name : 
            <input style={sytle}
            placeholder="Enter Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <br /> <br />
          <label style={{fontSize:'20px'}} htmlFor="">
            Email :
            <input style={sytle}
            placeholder="Enter Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <br /> <br />
          <button  style={button}>Submit</button>
        </form>
        </div>
       
        

      </div>
    
    );
  }
}
