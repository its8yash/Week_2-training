import React, {isValidElement, useState} from "react";
// import { validate } from "./validator";

const SignUpForm = () => {
    const [state, setState] = useState ({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const [error, seterror] = useState("");
    let handleChange = (e) => setState({...state,[e.target.name]: e.target.value});

    return (
        <form 
        onSubmit={(e) => {
        e.preventDefault();
    }
}
>
            <label>First Name</label>
            <input name = {"firstName"} 
            type ={"text"} 
            onChange = {handleChange} 
            value = {state.firstname} 
            placeholder= {"First Name"}
            />
            
            <label>Last Name</label>
            <input name = {"lastname"} 
            type ={"text"} 
            onChange = {handleChange} 
            value = {state.lastname} 
            placeholder= {"Last Name"}
            />

            <label>email</label>
            <input name = {"email"} 
            type ={"email"} 
            onChange = {handleChange} 
            value = {state.email} 
            placeholder= {"email"}
            />

            <label>password</label>
            <input name = {"password"} 
            type ={"password"} 
            onChange = {handleChange} 
            value = {state.password} 
            placeholder= {"password"}
            />
            <button type = {`submit`}>Submit</button>
            <span style = {{color: "red"}}>{error}</span>
        </form>
    )
}

export default SignUpForm;
