const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.post("/echo", (req, res) => {
  res.send(req.body)
})

app.listen(3000, () => console.log("Listening!"))