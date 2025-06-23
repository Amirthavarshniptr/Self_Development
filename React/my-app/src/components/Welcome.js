import React from "react";

function Welcome(props){
    return (
    <div>
    <h1>Hello {props.name} a.k.a {props.aka}</h1>
    {props.children}
    </div>)
}
export default Welcome