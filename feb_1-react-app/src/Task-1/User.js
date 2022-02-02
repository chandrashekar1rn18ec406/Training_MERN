import { Component } from "react";


class Users extends Component{
onBtnClick=()=>{
    const{user}=this.props
    const{id,email,last_name,first_name,avatar}=user
    const firstName=first_name
    const lastName=last_name
    alert(id+"\n"+email+"\n"+firstName+"\n"+lastName+"\n"+avatar)
}

    render(){
        const{user}=this.props
        const{id}=user
        const myStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            borderRadius: "20px",
            marginTop:'center'
        };
        

        return(
            <tr className="td_data">
                <td className="td_data" >User Id:{id}</td>
                <td className="td_data"><button onClick={this.onBtnClick} style={myStyle}>Check Details</button></td>
            </tr>
        )
    }
}

export default Users;