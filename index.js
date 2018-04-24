const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

const updates = [];

// Fill in your request handlers here
app.post("/updates", (req, res) => {
    const newUpdates = req.body.clientupdates.slice(req.body.sequenceNumber);
    console.log("NewUpdates.length", newUpdates.length);
    
    newUpdates.length && updates.push(...newUpdates);
    // console.log("updates: ", updates);
    res.send({ updates });
});

app.listen(port)