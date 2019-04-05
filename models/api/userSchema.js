const Joi = require ('joi');

// instantiate object
const createUserSchema = Joi.object ().keys ({
  name: Joi.string ().required (),
  phone: Joi.number ().required (),
  password: Joi.string ().required (),
});

const getUserListQuerySchema = Joi.object ()
  .keys ({
    skip: Joi.string ().optional (),
    limit: Joi.string ().optional (),
  })
  .and ('skip', 'limit');

const getUserDetailPathParamSchema = Joi.object ().keys ({
  userId: Joi.string ().required (),
});

const updupdateUserPathParamSchema = Joi.object ().keys ({
  userId: Joi.string ().required (),
});

const updateUserSchema = Joi.object ().keys ({
  name: Joi.string ().optional (),
  phone: Joi.number ().optional (),
  password: Joi.string ().optional (),
});

const deleteUserPathParamSchema = Joi.object ().keys ({
  userId: Joi.string ().required (),
});

const authenticateUserSchema = Joi.object ().keys ({
  name: Joi.string ().required (),
  password: Joi.string ().required (),
});

module.exports = {
  createUserSchema: createUserSchema,
  getUserListQuerySchema: getUserListQuerySchema,
  getUserDetailPathParamSchema: getUserDetailPathParamSchema,
  updateUserPathParamSchema: updupdateUserPathParamSchema,
  updateUserSchema: updateUserSchema,
  deleteUserPathParamSchema: deleteUserPathParamSchema,
  authenticateUserSchema: authenticateUserSchema,
};
