const helpers = require("./helpers");
const userHelpers = require("../users/helpers");

const userIdExists = (req, res, next) => {
  const { user_id } = req.params;
  let id = user_id;
  userHelpers
    .getUserByfilter({ id })
    .then((arr) => {
      if (arr.length < 1) {
        res.status(404).json({ message: "no user with this ID Found" });
      }
    })
    .catch((err) => res.status(500).json({ message: err }));

  next();
};

const taskExists = (req, res, next) => {
  const { task_id } = req.params;
  let id = task_id;
  helpers.findByTaskId(id)
    .then(([task]) => {
      if (task) {
        next();
      } else {
        res.status(200).json({ Message: "no task with this id exists" });
      }
    })
    .catch((err) => res.status(500).json({ message: err }));


};

module.exports = {
  userIdExists,
  taskExists,
};
