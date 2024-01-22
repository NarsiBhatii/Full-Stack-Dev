function calculateArithmetics(a,b,fu) {
    console.log(fu(a,b));
}

function sum(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

calculateArithmetics(3,4,sub);
