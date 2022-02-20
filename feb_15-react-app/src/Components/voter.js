// import rootReducers from "../Reducers/reduxReducer";
import store from "../Store/Store";
import { vooter } from "../Actions/Action";
import { Component } from "react";
import "../style/style.css";
import Final from "./final";
import { v4 } from "uuid";

class Voter extends Component {
  //state create
  constructor() {
    super();
    // console.log(store.getState());
    this.state = {
      fname: " ",
      lname: " ",
      gender: " ",
      age: " ",
      qualification: " ",
      elegible: " ",
      organization: " ",
      show: false,
    };
  }

  //ComponentDidMount
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        show: true,
      });
      console.log("update");
      console.log(store.getState().voterList);
    });
  }

  //Input on Change function
  InputOnChange = (event) => {
    const name = event.target.name;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  //form submit button
  onSubmit = (e) => {
    e.preventDefault();
    const voterDetails = {
      fname: this.state.fname,
      id: v4(),
      lname: this.state.lname,
      gender: this.state.gender,
      age: this.state.age,
      qualification: this.state.qualification,
      elegible: this.state.elegible,
      organization: this.state.organization,
    };

    //action dispatch
    store.dispatch(vooter(voterDetails));
    console.log(voterDetails);
  };

  render() {
    return (
      <div className="form">
        {this.state.show ? (
          <Final />
        ) : (
          <form action="" className="style" onSubmit={this.onSubmit}>
            <h1>Voter Details</h1>
            <label htmlFor="">
              First Name* :{" "}
              <input
                name="fname"
                type="text"
                value={this.state.fname}
                required
                onChange={this.InputOnChange}
              />
            </label>
            <br />
            <br />
            <label htmlFor="">
              {" "}
              Last Name :{" "}
              <input
                name="lname"
                type="text"
                required
                onChange={this.InputOnChange}
              />
            </label>
            <br /> <br />
            <label htmlFor="">
              Gender* :
              <label htmlFor="">
                Male :
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.InputOnChange}
                />
                <label htmlFor="">
                  Female :{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={this.InputOnChange}
                  />
                </label>
              </label>
            </label>
            <br />
            <br />
            <label htmlFor="">
              Age* :{" "}
              <input
                name="age"
                type="number"
                required
                onChange={this.InputOnChange}
              />
            </label>
            <br />
            <br />
            <label htmlFor="">
              Qualification :
              <select
                value={this.state.qualification}
                name="qualification"
                id=""
                required
                onChange={this.InputOnChange}
              >
                <option value="Select">Select</option>
                <option value="Agricultute">Agricultute</option>
                <option value="Graduate">Graduate</option>
                <option value="Doctor">Doctor</option>
                <option value="Police">Police</option>
              </select>
            </label>
            <br />
            <br />
            <label htmlFor="">
              {" "}
              Eligible* :
              <label htmlFor="">
                Yes :{" "}
                <input
                  name="elegible"
                  type="radio"
                  value="Yes"
                  onChange={this.InputOnChange}
                />
              </label>
              <br />
              <label htmlFor="">
                No :{" "}
                <input
                  name="elegible"
                  type="radio"
                  value="No"
                  onChange={this.InputOnChange}
                />
              </label>
            </label>
            <br />
            <br />
            <label htmlFor="">
              Organization Name* :{" "}
              <input
                name="organization"
                type="text"
                required
                onChange={this.InputOnChange}
              />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Voter;
