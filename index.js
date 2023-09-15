const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the express server")
})
app.get("/login", (req, res) => {
    res.status(200).send("welcome to the login page")
})
app.get("/signup", (req, res) => {
    res.status(200).send("welcome to the sign up page")
})

app.post("/home", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/about", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/login", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/signup", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})

app.listen(8080,()=>{
    console.log("listening on port 8080")
})