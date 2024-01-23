function sum(a ,b) {
    console.log(`Sum ${a+b}`)
}

function timeOut() {
    const p = new Promise(function(resolve) {
        setTimeout(resolve,1000)
    }) 
    return p
}

timeOut().then(function() {
    sum(5,7)
})