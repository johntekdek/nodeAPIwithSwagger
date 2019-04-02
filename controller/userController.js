const constants = require("../constants/constants");
const userService = require('../services/userServices')

module.exports.createUser = async (req, res, next) => {
    let responseObj = {};
  try {
   
    let data = req.body;
    console.log("req.body***",req.body)

    let responseFromService = await userService.createUser(data)
    switch (responseFromService.status) {
      case constants.serviceSatus.USER_CREATED_SUCCESSFULLY:
        responseObj.status = 200;
        responseObj.message = constants.serviceSatus.USER_CREATED_SUCCESSFULLY;
        responseObj.body = responseFromService.body;
        break
      default:
        responseObj = constants.responseObj;
        break
    }
    return res.status(responseObj.status).send(responseObj);
  } catch (err) {
    console.log("Something went wrong :Controller: create user", err);
    responseObj = constants.responseObj;
    return res.status(responseObj.status).send(responseObj);
  }
};


module.exports.getUserList = async (req, res, next) => {
  let responseObj = {};
try { 
  let data = {}
  let responseFromService = await userService.getUserList(data)
  switch (responseFromService.status) {
    case constants.serviceSatus.USER_LIST_FETCHED_SUCCESSFULLY:
      responseObj.status = 200;
      responseObj.message = constants.serviceSatus.USER_LIST_FETCHED_SUCCESSFULLY;
      responseObj.body = responseFromService.body;
      break
    default:
      responseObj = constants.responseObj;
      break
  }
  return res.status(responseObj.status).send(responseObj);
} catch (err) {
  console.log("Something went wrong :Controller: create user", err);
  responseObj = constants.responseObj;
  return res.status(responseObj.status).send(responseObj);
}
};