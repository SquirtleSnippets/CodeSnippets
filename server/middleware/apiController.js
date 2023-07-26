const express = require('express');
const ourDBModel = require('../models/postgresModel.js');

const apiController = {};

// get all code snippets for a user
apiController.getSnippets = async (req, res, next) => {
  try {
    console.log();
    const { userID } = req.body;
    const text = 'SELECT * FROM codeSnippets WHERE userID = $1';
    const params = [userID];
    const returnData = await ourDBModel(text, params);
    res.locals.snippets = returnData.rows;
    return next();
  } catch (error) {
    return next({
      log: 'Error in save middleware: ' + error,
      status: 400,
      message: { err: 'Error in get middleware' + error },
    });
  }
};

// create or update a code snippet
apiController.save = async (req, res, next) => {
  try {
    if (req.body.snipID) {
      console.log('we made it!', req.body);
      // update snippet in DB
      const { snipID, title, code } = req.body;
      const string =
        'UPDATE codesnippets SET title = $1, code = $2, dateEdited = NOW() WHERE snipID = $3;';
      const params = [title, code, snipID];
      await ourDBModel(string, params);
      res.locals.snipID = snipID;
    } else {
      // add snippet to DB
      console.log('req.body:', req.body);
      const { userID, title, code } = req.body;
      const string =
        'INSERT INTO codesnippets (userID, title, code) VALUES ($1, $2, $3) RETURNING snipID;';
      const params = [userID, title, code];
      const response = await ourDBModel(string, params);
      res.locals.snipID = response.rows[0].snipid;
    }
    return next();
  } catch (error) {
    return next({
      log: 'Error in save middleware',
      status: 400,
      message: { err: 'Error in save middleware' },
    });
  }
};

// delete a code snippet by a give ID
apiController.delete = async (req, res, next) => {
  try {
    if (req.body.snipID) {
      // delete snippet in DB
      const { snipID, userID, title, code } = req.body;
      const string = `DELETE FROM codesnippets WHERE snipID = $1`;
      const params = [snipID];
      const response = await ourDBModel(string, params);
    }
    return next();
  } catch (error) {
    next({
      log: 'Error in delete middleware',
      status: 400,
      message: { err: 'Error in delete middleware' },
    });
  }
};

module.exports = apiController;
