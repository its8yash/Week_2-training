const add = (a, b) => {
    return a+b;
};

const higherOrder = (a, ReferenceFunction) => {
    return ReferenceFunction(a, 20);
};

console.log(higherOrder(30, add));

