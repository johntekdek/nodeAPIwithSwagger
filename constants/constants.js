module.exports = {
    responseObj:{
        status:500,
        message:'Internal Server error',
        body:{}
    },
  databaseStatus: {
    ENTITY_CREATED: "Entity Created",
    ENTITY_MODIFIED: "Entity Modified",
    ENTITY_FETCHED: "Entity Fetched",
    ENTITY_DELETED: "Entity Deleted",
    DATABASE_CONNECTED: "Database connected successfully",
    DATABASE_ERROR: "Database error"
  
},

controllerStatus:{
    BAD_REQUEST:'Required fields missing'

},
serviceSatus:{
    USER_CREATED_SUCCESSFULLY:'User created Succesfully',
    USER_LIST_FETCHED_SUCCESSFULLY:'User list fetched successfully',
    USER_FETCHED_SUCCESSFULLY: 'User Fetched Successfully',
    USER_UPDATED_SUCCESSFULLY:'User updated successfully',
    USER_DELETED_SUCCESSFULLY: 'User deleted successfully'
}
};
