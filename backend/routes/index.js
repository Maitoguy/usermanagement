
const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/userInput', controller.addUser);
router.get('/getUser', controller.sendUser);
router.delete('/deleteUser/:id', controller.deleteUser);
router.put('/updateUser/:id', controller.updateUser);

module.exports = router;
