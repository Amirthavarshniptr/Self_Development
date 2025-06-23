import React, {Component} from "react";

class Greet extends Component{
    render(){
        return <h1>Welcom {this.props.name} a.k.a {this.props.aka}</h1>
        
    }
}
export default Greet