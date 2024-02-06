const express = require('express')
const app = express()
const port = 3001

app.get('/sum',(req,res) => {
    let num1 = parseInt(req.query.a);
    let num2 = parseInt(req.query.b);
    let sum = num1 + num2
    res.send(sum.toString())
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))