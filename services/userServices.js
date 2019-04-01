const constants = require("../constants/constants");
const User = require("../models/db/userModel");
const crudRepository = require('../database/crudRespository')

module.exports.createUser = async serviceData => {
  let responseObj = {};
  try {
    const user = new User({
      name: serviceData.name,
      password: serviceData.password,
      phone: serviceData.phone
    });
    let data = {
        model:user
    }
    let responseFromDatabase = await crudRepository.insertData(data)
    switch(responseFromDatabase.status){
      case constants.databaseStatus.ENTITY_CREATED:
        responseObj.body =responseFromDatabase.result
        responseObj.status = constants.serviceSatus.USER_CREATED_SUCCESSFULLY
        break
      defult:
        responseObj = constants.responseObj
        break
    }
    return responseObj
  } catch (err) {
    console.log('something went wrong:Service : create user',err)
    return responseObj = constants.responseObj
  }
};
