const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const apiController = require('./middleware/apiController');
// parse req body
app.use(express.json());

// serve homepage
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

// save route
app.post('/api/save', apiController.save, (req, res) => {
  console.log('accessing save route');
  return res.json(res.locals.snipID);
});

// delete route
app.post('/api/delete', apiController.delete, (req, res) => {
  // console.log();
  console.log('accessing delete route');
  return res.sendStatus(200);
});
// getSnippets route
app.post('/api/getSnippets', apiController.getSnippets, (req, res) => {
  console.log('accessing getSnippets route');
  // should response be json?
  return res.json(res.locals.snippets);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown middleware error',
    // is this the right status?
    status: 500,
    message: { err: 'Unkown middleware error' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
