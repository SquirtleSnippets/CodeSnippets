const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// parse req body
app.use(express.json());

// serve homepage
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

// save route
app.post('/api/save', (req, res) => {
  console.log('accessing save route');
  return res.sendStatus(200);
})
// delete route
app.delete('/api/delete', (req, res) => {
  console.log('accessing delete route');
  return res.sendStatus(200);
})
// getSnippets route
app.get('/api/getSnippets', (req, res) => {
  console.log('accessing getSnippets route');
  return res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})