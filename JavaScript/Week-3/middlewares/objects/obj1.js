


let numberOfRequestsForUser = {};
let user_id = "a1"

console.log(numberOfRequestsForUser[user_id] || 0)
console.log(numberOfRequestsForUser[user_id] || 0)
console.log(numberOfRequestsForUser[user_id] = numberOfRequestsForUser[user_id] || 0)
numberOfRequestsForUser[user_id]++
console.log(numberOfRequestsForUser['a3'] =  0)
numberOfRequestsForUser[user_id]++
console.log(numberOfRequestsForUser['a5'] = numberOfRequestsForUser['a5'] || 0)
numberOfRequestsForUser[user_id]++
console.log(numberOfRequestsForUser[user_id] = 0)
numberOfRequestsForUser[user_id]++
console.log(numberOfRequestsForUser[user_id] = numberOfRequestsForUser[user_id] || 0)
numberOfRequestsForUser[user_id]++
console.log(numberOfRequestsForUser[user_id] = numberOfRequestsForUser[user_id] || 0)


console.log(numberOfRequestsForUser)