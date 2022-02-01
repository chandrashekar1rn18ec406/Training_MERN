import React from "react";


class Img extends React.Component{
    render(){ 
        const{url} = this.props
        return(
        <div>
           <img src={url} alt="#" style={{width: "100px"}}/>
        </div>
        )
    }
}

export default Img;