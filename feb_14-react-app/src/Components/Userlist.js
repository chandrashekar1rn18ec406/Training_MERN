import React, { Component } from "react";
import store from "../store";
import adduser from "../actions/userAction";

export default class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FName: "",
      LName: "",
      PNumber: "",
      Password: "",
      // ProfilePic: "",
    };
  }

  //Create a userlist
  handleCreate = (e) => {
    const add =this.state
    const fName = e.target.FName.value;
    const LName = e.target.LName.value;
    const PNo = e.target.PNumber.value;
    const Pass = e.target.Password.value;

    const user ={
      :
    }

  };

  // Change state of input on textbox
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    const { FName, LName, PNumber, Password } = this.state;
    const userList = store.getState().userReducer;
    return (
      <div>
        <div>
          <div>
            <form action="">
              <h1>User Details</h1>
              <label htmlFor="">
                First Name:{" "}
                <input
                  type="text"
                  name="FName"
                  value={FName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              <label htmlFor="">
                Last Name:{" "}
                <input
                  type="text"
                  value={LName}
                  onChange={this.handleChange}
                  name="LName"
                />
              </label>
              <br />
              <br />
              <label htmlFor="">
                Phone No:{" "}
                <input
                  type="text"
                  value={PNumber}
                  name="PNumber"
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              <label htmlFor="">
                Password:{" "}
                <input
                  type="password"
                  value={Password}
                  name="Password"
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              {/* <label htmlFor="">
                User profile image:{" "}
                <input
                  type="file"
                  name="Profilepic"
                  onChange={(e) => {
                    this.imgPath(e);
                  }}
                />
              </label> */}
              <br />
              <br />
              <button>Submit</button>
            </form>
          </div>
          <table>
            <tbody>
              {userList.map((data) => (
                <tr key={data.id}>
                  <td>{data.Fname}</td>
                  <td>{data.Lname}</td>
                  <td>{data.PNumber}</td>
                  <td>{data.Password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
