const express = require('express');
const app = express();

app.get('/payment-list', (req, res)=>{
    let response = {
        data: {
            item:[
             {   id:1, name: "Payment 1"},{id:2, name: "Payment 2"}
            ]
        }
    }
    res.status(200).json(response);
})

app.get("/", (req, res)=>{
    res.status(200).json({message: "Payment server is running"})
})

const port = 4001;
app.listen(port, () => {
    console.log(`Payment Server is running on port ${port}`);
});