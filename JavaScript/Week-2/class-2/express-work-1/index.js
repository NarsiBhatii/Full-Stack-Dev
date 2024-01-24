const express = require('express')
const app = express()
const port = 3001

var user = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]

app.get('/',(req,res) => {
    let johnKidneys = user[0].kidneys
    let numberOfJohnsKidneys = johnKidneys.length
    let numberOfHealthyKidneys = johnKidneys.filter((kidney) => (kidney.healthy === true)).length
    let numberOfUnhealthyKidneys = numberOfJohnsKidneys -   numberOfHealthyKidneys

    res.json({numberOfJohnsKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys})
})

app.use(express.json())
app.post('/',(req,res) => {
    let isHealthy = req.body.isHealthy
    user[0].kidneys.push(({healthy : isHealthy }))
    
    res.json({
        msg: "done"
    })
})

app.put('/',(req,res) => {
    const updatedKidneys = user[0].kidneys.map((kidney) => {
        return {
            ...kidney,healthy: true
        }
    })
    user[0].kidneys = updatedKidneys
    res.send({})
})

app.delete('/',(req,res) => {
    let healthyKidneys = user[0].kidneys.filter((kidney) => kidney.healthy !== false)
    user[0].kidneys = healthyKidneys
    res.send({})
})

app.listen(port,() => (
    console.log(`Server is running on http://localhost:${port}`)
))