const express = require('express');
const Message = require('./model');

const controller = express.Router();

const sendMessage = (req, res) => {

    const {
        name,
        lastName,
        message
    } = req.body;

    const newMessage = new Message({
        name,
        lastName,
        message
    });

    newMessage.save((err, message) => {
        if (err) {
            res.status(404).json({ err });
        } else {
            const resData = { success: true };
            res.json(resData);
        }
    })

};

controller.post('/sendMessage', sendMessage);

module.exports = controller;