const express = require('express');

const apiController = {}

apiController.save = async (req, res, next) => {
    try {
        if (req.body.snipID) {
            // add snippet to DB
            const { snipID } = req.body; 
        } else {
            // update snippet in DB
        }
        return next();
    } catch (error) {

    }
}











