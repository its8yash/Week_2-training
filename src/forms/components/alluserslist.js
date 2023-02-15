import React, {Component, useState} from "react";
import Test from "./test";
import UserDetails from "./UserDetails";

// const AllUsersList = () {
//     cost [state, setState] = userState({
//         name: "Priyanshu Saxena",
//     });
//     let allUsers = [
//         { name: "John", email: "john@email.com", phoneNumber: "+91-987654321"},
//         { name: "Shreyus", email: "shreyus@email.com", phoneNumber: "+91- 765432189" },
//         { name: "Nilamjan", email: "nilanjan@email.com", phoneNumber: "+91-654321789"},
//     ];

//     let setState = (name) => {
//         setState({...state, name});
//     };

//     return(
//         <div>
//             <Test name={state.name} setName = {setStateName} />
//             {allUsers.map((user, index) => (
//                 <UserDetails key={index} user = {user} />
//             ))}
//         </div>
//     );
// };

class AllUsersList extends Component {
    state = {
        name: "Priyanshu Saxena",
    };

    setStateName = (name) => {
        this.setState({...this.state, name});
    };

    allUsers = [
        {name: "John", email: "john@email.com", phoneNumber: "+91-987654321"},
        { name: "Shreyus", email: "shreyus@email.com", phoneNumber: "+91- 765432189" },
        { name: "Nilamjan", email: "nilanjan@email.com", phoneNumber: "+91-654321789"},
    ];

    render() {
        return (
            <div>
                <Test name={state.name} setName = {setStateName} />
            {allUsers.map((user, index) => (
                <UserDetails key={index} user = {user} />
            ))}
            </div>
        )
    }
}

export default AllUsersList;
