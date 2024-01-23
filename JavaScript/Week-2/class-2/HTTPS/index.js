const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  console.log("Hello World!")
  console.log(req.headers)
  res.send('Hello World!')
})


// Example route for getting data from an API
app.get('/data-get', function(req,res) {
  console.log("data-get Route")
  res.json( {
    name: "narsi",
    age: 23
  })
})

app.use(bodyParser.json())
// add a post request to our server
app.post('/conversation', function(req,res){
  console.log(req.headers)
  console.log(req.body.msg)  
  res.send( {
    msg: '2 + 2 is 4'
  })
})

// make all the files in /public available
app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})