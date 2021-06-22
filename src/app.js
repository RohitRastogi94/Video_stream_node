const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()
const VideoRouter = require('./routes/Videos')
app.use(cors())

const loggerMiddleware = (req, res, next) => {
    console.log('New request to: ' + req.method + ' ' + req.path, req.body)
    next()
}
app.get('/video', (req, res) => {
    res.sendFile('assets/soul.mp4', { root: __dirname });
});
app.use(express.json())


// Register the function as middleware for the application
app.use(loggerMiddleware)
app.use(VideoRouter)



module.exports = app