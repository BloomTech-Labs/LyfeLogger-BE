const express = require("express");
const router = express.Router();


const {
    findByIDHandler,
    getAllTasksHandler,
    findAllTasksByUserIDHandler
} = require("./handlers");

const {
    userIdExists,
    taskExists
} = require("./validators");


router.get("/", getAllTasksHandler);
router.get("/findById/user=:user_id/:task_id", userIdExists, findByIDHandler);
router.get("/findByUserId/:user_id", userIdExists, findAllTasksByUserIDHandler);



module.exports = router;