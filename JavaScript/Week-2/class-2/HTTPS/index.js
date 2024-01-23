const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/data-get', function(req,res) {
  res.json( {
    name: "narsi",
    age: 23
  })
})

app.post('/conversation', function(req,res){
  console.log(req.headers)  
  res.send( {
    msg: '2 + 2 is 4'
  })
})
app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})