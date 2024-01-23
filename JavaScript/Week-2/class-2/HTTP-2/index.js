const express = require('express');
const app = express();
const port = 3001;

function calculateSum(n) {
    let ans = 0;
    for(let i = 0; i<=n; i++) {
        ans += i;
    }
    return ans;
}

app.get('/', function(req, res) {
    // get the input number from the query parameter 'num'
    const num = req.query.n;
    let result = calculateSum(num);
    res.send(result.toString())
})

app.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}/`)
})