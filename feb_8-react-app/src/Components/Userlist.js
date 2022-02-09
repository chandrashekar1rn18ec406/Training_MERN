import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Userlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isDataLoaded: false,
            indivisualUser: [],
            isIndivisualDataLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json,
                    isDataLoaded: true,
                });
            });
    }

    render() {
        const { indivisualUser, isDataLoaded, isIndivisualDataLoaded, users } = this.state;

        console.log(isDataLoaded);
        console.log(users);

        if (!isDataLoaded)
            return (
                <div>
                    <h1> Loading.... </h1>{" "}
                </div>
            );

        let styleElement = {
            margin: "auto",
            border: "1px solid black",
            borderCollapse: "collapse",
            padding: "5px",
            
        };

        return (
            <div>
                <h1 style={{ textAlign: "center" }}> User Data from fetched API </h1>{" "}
                <table
                    style={{
                        margin: "auto",
                        border: "1px solid black",
                        borderCollapse: "collapse",
                    }}
                >
                    <tbody>
                        {users.data.map((item) => (
                            <tr
                                style={{
                                    border: "1px solid black",
                                    borderCollapse: "collapse",
                                    textAlign: "center",
                                }}
                                key={item.id}
                            >
                                <td style={styleElement}>{item.id}</td>
                                <td style={styleElement}>{item.first_name}</td>
                                <td style={styleElement}>
                                   <Link to={`/profilepic/${item.id}`}> <button style={{borderRadius:"10px",color:'#5a9c9a'}}
                                       
                                        
                                    >
                                       Profile Photo
                                    </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {indivisualUser && isIndivisualDataLoaded ? (
                        <div>
                            <p>Detailed View</p>

                            <table style={styleElement}>
                                <tbody>
                                    <tr>
                                        <td style={styleElement}>Photo</td>
                                       
                                    </tr>
                                    <tr>
                                       
                                        <td style={styleElement}>
                                            <img src={indivisualUser.avatar} alt="pic" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    }
}