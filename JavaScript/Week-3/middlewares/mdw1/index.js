const express = require('express')
const app = express()
const port = 3001

const userMiddleware = (req,res,next) => {
    const username = req.header.username
    const pass = req.headers.pass

    if(username != 'narsi' && pass != 'pass') {
        res.status(403).json({
            error: "user doesn't exist"
        })
    } else {
        next()
    }
}

const kidneyMiddleware = (req, res, next) => {
    const kidneys = req.query.kidneys

    if(kidneys != 1 && kidneys != 2) {
        res.status(411).json( {
            error: "wrong input" 
        })
    }else {
        next()
    }
}


app.get('/health-checkup',userMiddleware,kidneyMiddleware,(req, res) => {
    res.json({ msg: "your kidneys are fine!" })
})

app.listen(port,() => {
    console.log(`server is running on post: ${port}`)
})
