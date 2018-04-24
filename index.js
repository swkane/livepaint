const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

const updates = [];

// Fill in your request handlers here
app.post("/updates", (req, res) => {
    updates.push(...req.body.clientupdates);
    res.send({ updates });
});

app.listen(port)