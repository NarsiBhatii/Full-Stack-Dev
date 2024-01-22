function NarsiAsyncFunction () {
    let p = new Promise( function (resolve) {
        setTimeout(function() {
            resolve("hi, there")
        },2000);
    });
    return p;
}

async function main() {
    // Call the asynchronous function and log its result:
   const value = await NarsiAsyncFunction();
   console.log(value); 
}

main();