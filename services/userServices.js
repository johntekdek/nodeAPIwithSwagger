const constants = require("../constants/constants");
const User = require("../models/db/userModel");
const crudRepository = require("../database/crudRespository");
const mongoose = require("mongoose");

module.exports.createUser = async serviceData => {
  let responseObj = {};
  try {
    const user = new User({
      name: serviceData.name,
      password: serviceData.password,
      phone: serviceData.phone
    });
    let data = {
      model: user
    };
    let responseFromDatabase = await crudRepository.insertData(data);
    switch (responseFromDatabase.status) {
      case constants.databaseStatus.ENTITY_CREATED:
        responseObj.body = responseFromDatabase.result;
        responseObj.status = constants.serviceSatus.USER_CREATED_SUCCESSFULLY;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return responseObj;
  } catch (err) {
    console.log("something went wrong:Service : get user list:", err);
    return (responseObj = constants.responseObj);
  }
};

module.exports.getUserList = async serviceData => {
  let responseObj = {};
  try {
    let data = {
      query: {},
      model: User,
      excludeFields: "" // to add stuff '-password -_v'
    };
    if (serviceData.skip && serviceData.limit) {
      data.pagination = {
        skip: parseInt(serviceData.skip),
        limit: parseInt(serviceData.limit)
      };
    } else {
      data.pagination = {};
    }
    let responseFromDatabase = await crudRepository.find(data);
    switch (responseFromDatabase.status) {
      case constants.databaseStatus.ENTITY_FETCHED:
        responseObj.body = responseFromDatabase.result;
        responseObj.status =
          constants.serviceSatus.USER_LIST_FETCHED_SUCCESSFULLY;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return responseObj;
  } catch (err) {
    console.log("something went wrong:Service : create user", err);
    return (responseObj = constants.responseObj);
  }
};

module.exports.getUserDetail = async serviceData => {
  let responseObj = {};
  try {
    let data = {
      query: {
        _id: mongoose.Types.ObjectId(serviceData.userId)
      },
      model: User,
      excludeFields: "" // to add stuff '-password -_v'
    };

    let responseFromDatabase = await crudRepository.find(data);
    switch (responseFromDatabase.status) {
      case constants.databaseStatus.ENTITY_FETCHED:
        responseObj.body = responseFromDatabase.result;
        responseObj.status = constants.serviceSatus.USER_FETCHED_SUCCESSFULLY;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return responseObj;
  } catch (err) {
    console.log("Something went wrong:Service : get user detail", err);
    return (responseObj = constants.responseObj);
  }
};

module.exports.updateUser = async serviceData => {
  let responseObj = {};
  try {
    let data = {
      findQuery: {
        _id: mongoose.Types.ObjectId(serviceData.userId)
      },
      model: User,
      updateQuery: {}
    };
    if (serviceData.name) {
      data.updateQuery.name = serviceData.name;
    }
    if (serviceData.password) {
      data.updateQuery.password = serviceData.password;
    }
    if (serviceData.phone) {
      data.updateQuery.phone = serviceData.phone;
    }
    let responseFromDatabase = await crudRepository.findOneAndUpdate(data);
    switch (responseFromDatabase.status) {
      case constants.databaseStatus.ENTITY_MODIFIED:
        responseObj.body = responseFromDatabase.result;
        responseObj.status = constants.serviceSatus.USER_UPDATED_SUCCESSFULLY;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return responseObj;
  } catch (err) {
    console.log("Something went wrong:Service : update user detail", err);
    return (responseObj = constants.responseObj);
  }
};

module.exports.deleteUser = async serviceData => {
  let responseObj = {};
  try {
    let data = {
      findQuery: {
        _id: mongoose.Types.ObjectId(serviceData.userId)
      },
      model: User
    };

    let responseFromDatabase = await crudRepository.deleteOne(data);
    switch (responseFromDatabase.status) {
      case constants.databaseStatus.ENTITY_DELETED:
        responseObj.body = responseFromDatabase.result;
        responseObj.status = constants.serviceSatus.USER_DELETED_SUCCESSFULLY;
        break;
      default:
        responseObj = constants.responseObj;
        break;
    }
    return responseObj;
  } catch (err) {
    console.log("Something went wrong:Service : update user detail", err);
    return (responseObj = constants.responseObj);
  }
};
