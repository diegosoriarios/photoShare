const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require("pusher")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("dotenv").config()

app.get('/', (req, res) => {
    res.send('all green')
})

app.post('/pusher/auth', (req, res) => {
    let socketId = req.body.socket_id
    let channel = req.body.channel_name
    let auth = pusher.authenticate(socketId, channel)
    res.send(auth)
})

let port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})