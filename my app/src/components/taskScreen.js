import React, {useEffect, useState } from "react";

const taskScreen = () => {
    // const [allTasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Task screen mounted");
    }, []);

    useEffect(() => {
        console.log("Task screen updated");
        setCount(5);
    }, [])
    return taskScreen.map((task, index) => {
        <div key = {index} on onClick={(e) => setCount (count + 1)}>
            <h1>
                {task.taskNumber} {task.taskname}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
    });
};
export default taskScreen;

//useEffects
//1. It takes 2 arguments.
//A. The first argument is a function that will be called after the
//B. The second argument is an array of values that will be watched for changes
// B. a. No array passed; useEffect will run only on initial render and every time
// When the value of any variable in the changes

