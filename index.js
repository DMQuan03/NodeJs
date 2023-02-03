const express = require('express')
const app = express()
const port = 3001

app.get('/', (req , res) => res.send("hello world"))

app.listen(port , () => console.log(`Example app Listening at http://localhost:${port}`))