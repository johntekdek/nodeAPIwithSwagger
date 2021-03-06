const express = require ('express');
const router = express.Router ();
const userController = require ('../controller/userController');
const joiSchemaValidation = require ('../helper/joiSchemaValidation');
const userSchema = require ('../models/api/userSchema');
const tokenValidation = require ('../helper/tokenValidation');

router.post (
  '/authenticate',
  joiSchemaValidation.validateBody (userSchema.authenticateUserSchema),
  userController.authenticateUser
);

router.post (
  '/',
  joiSchemaValidation.validateBody (userSchema.createUserSchema),
  userController.createUser
);
router.get (
  '/list',
  tokenValidation.validateToken (),
  joiSchemaValidation.validateQueryParams (userSchema.getUserListQuerySchema),
  userController.getUserList
);
router.get (
  '/details/:userId',
  joiSchemaValidation.validatePathParams (
    userSchema.getUserDetailPathParamSchema
  ),
  userController.getUserDetail
);

router.put (
  '/update/:userId',
  joiSchemaValidation.validatePathParams (userSchema.updateUserPathParamSchema),
  joiSchemaValidation.validateBody (userSchema.updateUserSchema),
  userController.updateUser
);

router.delete (
  '/remove/:userId',
  joiSchemaValidation.validatePathParams (userSchema.deleteUserPathParamSchema),
  userController.deleteUser
);

module.exports = router;
