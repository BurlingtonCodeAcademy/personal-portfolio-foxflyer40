// import express from 'express'  <-Newer version, import may not work with some browsers
const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.resolve('./client/build')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => {
   console.log('listening ', port)
})
