const constants = require ('../constants/constants');
const userService = require ('../services/userServices');

module.exports.createUser = async (req, res, next) => {
  let responseObj = {};
  try {
    let data = req.body;
    console.log ('req.body***', req.body);

    let responseFromService = await userService.createUser (data);
    switch (responseFromService.status) {
      case constants.serviceSatus.USER_CREATED_SUCCESSFULLY:
        responseObj.status = 200;
        responseObj.message = constants.serviceSatus.USER_CREATED_SUCCESSFULLY;
        responseObj.body = responseFromService.body;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return res.status (responseObj.status).send (responseObj);
  } catch (err) {
    console.log ('Something went wrong :Controller: create user', err);
    responseObj = constants.responseObj;
    return res.status (responseObj.status).send (responseObj);
  }
};

module.exports.getUserList = async (req, res, next) => {
  let responseObj = {};
  try {
    let data = {
      skip: req.query.skip,
      limit: req.query.limit,
    };
    let responseFromService = await userService.getUserList (data);
    switch (responseFromService.status) {
      case constants.serviceSatus.USER_LIST_FETCHED_SUCCESSFULLY:
        responseObj.status = 200;
        responseObj.message =
          constants.serviceSatus.USER_LIST_FETCHED_SUCCESSFULLY;
        responseObj.body = responseFromService.body;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return res.status (responseObj.status).send (responseObj);
  } catch (err) {
    console.log ('Something went wrong :Controller: create user', err);
    responseObj = constants.responseObj;
    return res.status (responseObj.status).send (responseObj);
  }
};

module.exports.getUserDetail = async (req, res, next) => {
  let responseObj = {};
  try {
    let data = {
      userId: req.params.skip,
    };
    let responseFromService = await userService.getUserDetail (data);
    switch (responseFromService.status) {
      case constants.serviceSatus.USER_FETCHED_SUCCESSFULLY:
        responseObj.status = 200;
        responseObj.message =
          constants.serviceSatus.USER_FETCHED_SUCCESSFULLY;
        responseObj.body = responseFromService.body;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return res.status (responseObj.status).send (responseObj);
  } catch (err) {
    console.log ('Something went wrong :Controller: create user deatils', err);
    responseObj = constants.responseObj;
    return res.status (responseObj.status).send (responseObj);
  }
};

module.exports.updateUser = async (req, res, next) => {
  let responseObj = {};
  try {
    let data = {
      userId: req.params.userId,
      name:req.body.name,
      phone:req.body.phone,
      password:req.body.password,

    };
    let responseFromService = await userService.updateUser(data);
    switch (responseFromService.status) {
      case constants.serviceSatus.USER_UPDATED_SUCCESSFULLY:
        responseObj.status = 200;
        responseObj.message =
          constants.serviceSatus.USER_UPDATED_SUCCESSFULLY;
        responseObj.body = responseFromService.body;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return res.status (responseObj.status).send (responseObj);
  } catch (err) {
    console.log ('Something went wrong :Controller: update user', err);
    responseObj = constants.responseObj;
    return res.status (responseObj.status).send (responseObj);
  }
};


module.exports.deleteUser = async (req, res, next) => {
  let responseObj = {};
  try {
    let data = {
      userId: req.params.userId,
      
    };
    let responseFromService = await userService.deleteUser(data);
    switch (responseFromService.status) {
      case constants.serviceSatus.USER_DELETED_SUCCESSFULLY:
        responseObj.status = 204;
        responseObj.message =
          constants.serviceSatus.USER_DELETED_SUCCESSFULLY;
        responseObj.body = responseFromService.body;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return res.status (responseObj.status).send (responseObj);
  } catch (err) {
    console.log ('Something went wrong :Controller: delete user', err);
    responseObj = constants.responseObj;
    return res.status (responseObj.status).send (responseObj);
  }
};