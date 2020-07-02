const Helper = require("./helpers");


const getAllTasksHandler = (req, res) => {
  Helper.getAllTasks()
    .then((tasks) => {
      res.status(200).json({ data: tasks });
    })
    .catch(err => res.status(500).json({ message: err }));
};

const findByIDHandler = (req, res) => {
    const { task_id, user_id } = req.params;
  Helper.findById(task_id, user_id)
    .then((task) => {
     res.status(200).json({ data: task });
    })
    .catch(err => res.status(500).json({ message: err }));
};

const findAllTasksByUserIDHandler = (req, res) => {
    const {user_id } = req.params;
  Helper.findByUserId(user_id)
    .then((tasks) => {
     res.status(200).json({ data: tasks });
    })
    .catch(err => res.status(500).json({ message: err }));
};

module.exports = {
findByIDHandler,
getAllTasksHandler,
findAllTasksByUserIDHandler

};