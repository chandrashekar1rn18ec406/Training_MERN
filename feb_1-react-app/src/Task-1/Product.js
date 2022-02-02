import { Component } from "react";


class Products extends Component{
onBtnClick=()=>{
    const{user}=this.props
    const{id,name,color,year,pantone_value}=user
    const pantonValue=pantone_value
    alert(id+"\n"+name+"\n"+year+"\n"+color+"\n"+pantonValue)
}

    render(){
        const{user}=this.props
        const{id}=user
        const mystyle = {
            color: "white",
            backgroundColor: "#562718",
            padding: "10px",
            fontFamily: "Arial",
            borderRadius: "20px",
    
            
        };
    
        return(
            <tr style={{marginTop:"20px"}}>
               
                <td className="td_data"  style={{marginTop:"20px"}} >Product Id:{id}</td>
                <td className="td_data"><button onClick={this.onBtnClick}  style={mystyle}>Check Details</button></td>
            </tr>
        )
    }
}

export default Products