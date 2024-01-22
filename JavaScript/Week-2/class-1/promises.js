// function myOwnSetTimeout(callback, duration) {
//     setTimeout(callback,duration);
// }

// myOwnSetTimeout(function() {
//     console.log("Hello World!");
// },1000)


function promisifyMyOwnSetTimeout (duration) {
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration)
    }) 
    return p;
}


promisifyMyOwnSetTimeout(2000).then(function() {
    console.log('Resolved!');
})


