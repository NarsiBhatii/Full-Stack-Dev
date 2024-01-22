function NarsiAsyncFunction() {
    let a = new Promise(function(resolve) {
        setTimeout(resolve,2000);
    });
    return a
}

const value = NarsiAsyncFunction();

value.then(function() {
    console.log("Hi, login")
})

console.log("Hello");