var user = [{
    name: 'John',
    kidneys: [{
        healthy: false,
    }]
}]

// let johnKidneys = user[0].kidneys
// let numberOfJohnsKidneys = johnKidneys.length
// let numberOfUnhealthyKidneys = johnKidneys.filter((kidney) => ( kidney.healthy === false)).length
// let numberOfHealthyKidneys = numberOfJohnsKidneys - numberOfUnhealthyKidneys

let healthyKidneys = user[0].kidneys.filter((kidney) => kidney.healthy === true)
console.log(healthyKidneys)

