import React, {useReducer}from "react";

const countreducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count -1};
        default:
            return state;
    }
};

const TestComponent = () => {
    const [state, dispatch] = useReducer(counterReduce, {count: 0});

    return(
        <div>
            <h1>The count is {state.count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>Increse</button>
            <button onClick={() => dispatch ({type: "decrement" })}>Decrease</button>
        </div>
    )
}

export default TestComponent;

//UseReducer is a function that takes 2 arguments.
// 1. A reduce function
// 2. An initial value of state

// useReduce returns an array of 2 values.
// 1. The current state
// 2. A dispatch function
