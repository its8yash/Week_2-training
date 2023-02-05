export const testAPI = (a,b) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 15000);
    });
};

export let tasks = [
    {
        taskNumber: 1,
        taskName: "task1",
        taskDescription: "This is task 1",
    },
    {
        taskNumber: 2,
        taskName: "task2",
        taskDescription: "This is task 2",
    },
    {
        taskNumber: 3,
        taskName: "task3",
        taskDescription: "This is task 3",
    },
    {
        taskNumber: 4,
        taskName: "task4",
        taskDescription: "This is task 4",
    },
]
