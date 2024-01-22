const b = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("foo");
    },);
});

function callback() {
    console.log('callback called');
}

console.log(b);
b.then(callback);