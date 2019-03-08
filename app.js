const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  
  res.send('Welcome home !')
})

app.get('/hello', (req, res) => {
  res.send(' World!')
})

app.get('/t',  (req, res) =>{
  res.send(req.params)
})

app.get(('/ab*cd'),  (req, res) =>{
  res.send('/ab*cd')
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

