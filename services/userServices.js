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
    let data ={
        model:user
    }
    let responseFromDatabase = await crudRepository.insertData(data)
  } catch (err) {}
};
