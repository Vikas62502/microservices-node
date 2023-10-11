const express = require('express');
const app = express();

app.get('/order-list', (req, res) => {
    let response = {
        data: {
            item: [
                { id: 1, name: "order 1" }, { id: 2, name: "order 2" }
            ]
        }
    }
    res.status(200).json(response);
})

app.get("/", (req, res) => {
    res.status(200).json({ message: "Order server is running" })
})

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});