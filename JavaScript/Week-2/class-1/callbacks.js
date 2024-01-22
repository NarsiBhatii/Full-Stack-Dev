function square(data) {
    return data * data;
}

function cube(data) {
    return data * data * data;
}

function quad(data) {
    return data * data * data * data;
}

function sumOfSomething(value1, value2, fn) {
    const  f1 = fn(value1);
    const  f2 = fn(value2);
    return f1 + f2;
}

const data = sumOfSomething(2,4,square);
console.log(data);