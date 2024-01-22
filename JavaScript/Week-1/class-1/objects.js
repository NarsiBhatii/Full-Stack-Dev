const allUsers = [
    {
        "fullName": "Narsi",
        "gender": "male"
    },
    {
        "fullName": "Alice",
        "gender": "female"
    },
    {
        "fullName": "Bob",
        "gender": "male"
    },
    {
        "fullName": "Eva",
        "gender": "female"
    },
    {
        "fullName": "Charlie",
        "gender": "male"
    }
]

for(let i = 0;i<allUsers.length;i++) {
    if(allUsers[i]["gender"] == "male") {
        console.log(`${allUsers[i]['fullName']} is a male.`);
    }
}
