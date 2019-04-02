const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const joiSchemaValidation = require('../helper/joiSchemaValidation')
const userSchema = require('../models/api/userSchema')

router.post("/",joiSchemaValidation.validateBody(userSchema.createUserSchema), userController.createUser);
router.get('/list',userController.getUserList)

module.exports = router;
