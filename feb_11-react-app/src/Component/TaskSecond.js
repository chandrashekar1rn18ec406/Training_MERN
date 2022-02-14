import React, { Component } from "react";

export default class TaskSecond extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      image: "",
      details: [],
    };
  }

  eventName = (event) => {
    this.setState({ name: event.target.value });
  };

  eventEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  eventImage = (event) => {
    const file = event.target.files[0];
    this.getBase64(file).then((base64) => {
      localStorage["key"] = base64;
      console.debug("file stored", base64);
      this.setState({ image: base64 });

    });
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, image } = this.state;
    const details = { name: name, email: email, image: image };
    localStorage.setItem("key", JSON.stringify(details));

    let userDetails = {
      name,
      email,
      image,
    };

    const getDetails = async () => {
      this.setState((prevState) => ({
        details: [...prevState.details, userDetails],
      }));
    };

    getDetails();

  };

  componentDidMount() {
    let DATA = JSON.parse(
      localStorage.getItem("key"),
      //localStorage.getItem("File_upload"),
    );

    if (localStorage.getItem("key")) {
      this.setState({
        name: DATA.name,
        email: DATA.email,
        image: DATA.image,
      });
    } else {
      this.setState({
        name: "",
        email: "",
        image: "",
      });
    }
  }
  

  render() {
    const sytle = {
      color:'red',
      width: "20%",
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
    const { details } = this.state;
    return (
      <div className="Cont">
        <h1>Task - 3</h1>
        <div className="card">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label>
                <strong>Name</strong>
              </label>
              <input type="text" style={sytle} className="form-control" value={this.state.name} onChange={this.eventName}/>
            </div>
            <br/><br/>
            <div className="form-group">
              <label>
                <strong>Email</strong>
              </label>
              <input type="text" style={sytle}  className="form-control" value={this.state.email} onChange={this.eventEmail}/>
            </div>
            <br/><br/>
            <div className="form-group">
              <label>
                <strong>Profile Image</strong>
              </label>
              <input type="file" accept=".jpg,.jpeg,.png" style={button} className="form-control" file={this.state.image} onChange={this.eventImage}/>
            </div>
            <br/><br/>
            <div>
              <button type="submit" style={button} className="btn btn-primary btn-block">Submit</button>
            </div>
            <br/><br/>
          </form>

          
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Profile Image</th>
            </tr>

            {details.map((eachUser) => (
              <GetUser user={eachUser} key={eachUser.name} />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

const GetUser = (props) => {
  const { user } = props;
  const { name, email, image } = user;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td><img className="img" src={image} alt="img"/></td>
    </tr>
  );
};


