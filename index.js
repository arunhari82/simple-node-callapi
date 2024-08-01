
const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var gatewayURL = process.env.gatewayURL;
    console.log("Received Request invoking URL : " + gatewayURL);
    axios.get(gatewayURL).then(function(response) {
        if(response)
            {
                console.log(response.data);
                res.send(response.data)
            }
    }).catch( function(error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    });
    
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



