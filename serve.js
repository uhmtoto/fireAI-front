var express = require('express')
var serveStatic = require('serve-static')
var app = express()

app.use('/', serveStatic(__dirname + '/dist'))

app.listen(80, () => {
  console.log('FireFront Server is Running on Port 80')
})