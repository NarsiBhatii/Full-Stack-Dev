const user = {
    name: "Narsi",
    age: 23,
    gender: "male"
}

console.log(user);
const user1 = JSON.stringify(user);
console.log(user1);
// Parsing the string back to an object using parse() method of JSON
const userObj = JSON.parse(user1);
console.log(userObj);

