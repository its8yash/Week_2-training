import React, { Component, useState } from "react";
// class Name extends Component {
//     state = { name: "Shiva"};
//     setName (name) {
//         this.setState({...this.state, name})
//     }
//     render(){
//         return (
//             <>
//             <h1> The name is: {this.state.name}</h1>
//             <button onClick={this.setName("Shivkumar")}>Click me</button>
//             </>
//         ); 
//     }
// }
const Name = () => {
    const [state, setState] = useState("Shivkumar");
    return (
        <>
        <h1>The name is :{state.name}</h1></>
    )
}
export default Name;