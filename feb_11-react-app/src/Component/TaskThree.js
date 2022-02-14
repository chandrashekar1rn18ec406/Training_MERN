import React, { Component } from 'react';


class TaskThree extends Component {
   
  handleSubmit = () => {
    const image = this.getImage.value;
    localStorage.setItem('image', image);
    this.getImage.value = '';
    
  };
  
render() {
    const sytle = {
        color:'red',
        width: "50%",
        padding: "12px 20px",
        margin: "15px ",
        display: "inline-block",
        border:" 1px solid #ccc",
        borderRadius: '4px',
        boxSizing: "border-box",
    };
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
        <h1>Task-2</h1>
      <form onSubmit={this.handleSubmit}>
        <label style={{fontSize:'20px'}} htmlFor="">URL</label>
        <input required type="text" placeholder="Paste your image url here" ref={(input) => this.getImage = input} style={sytle}/>
        <br></br> <br />
        <button style={button}>Save</button>

      </form>

      <div style={{ width: '50%', margin: '0px auto' }}>
        <img src={localStorage.getItem('image')} alt={'Image will get displayed here'}/>
      </div>
    </div>
  );
}
}
export default TaskThree;