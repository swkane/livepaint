const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

const updates = [];
let latest = 0;

// Fill in your request handlers here
app.post("/updates", (req, res) => {
    updates.push(...req.body.clientupdates);
    console.log("updates: ", updates);
    latest = updates.length;
    let newUpdates = updates.slice(req.body.lastSeen);
    console.log("newUpdates: ", newUpdates);
    res.send({ newUpdates, latest });
});

app.listen(port)