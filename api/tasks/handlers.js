const Helper = require("./helpers");
const { response } = require("../../server");

const getAllTasksHandler = (req, res) => {
  Helper.getAllTasks()
    .then((tasks) => {
      res.status(200).json({ data: tasks });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

const findByIDHandler = (req, res) => {
  const { task_id, user_id } = req.params;
  Helper.findById(task_id, user_id)
    .then((task) => {
      res.status(200).json({ data: task });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

const findAllTasksByUserIDHandler = (req, res) => {
  const { user_id } = req.params;
  Helper.findByUserId(user_id)
    .then((tasks) => {
      res.status(200).json({ data: tasks });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

const insertTaskHandler = (req, res) => {
  const taskData = req.body;
  const { task_notes, task_name, user_id, category_name,due_date, all_day,is_complete } = taskData;
  const TaskObjectForInsert = {
    user_id: user_id ,
    due_date:due_date,
    all_day: all_day,
    is_complete: is_complete,
    task_notes: task_notes
  };

  Helper.findByTaskName(task_name)
    .then(([name]) => {
      if (name) {
        TaskObjectForInsert.task_id = name.id;
      }
      else{
          Helper.addTaskName(task_name)
          .then(([id]) => {
            TaskObjectForInsert.task_id = id;
          })
          .catch((err) => res.status(500).json({ message: err }));
      }
    })  
    .catch((err) => res.status(500).json({ message: err }));

    Helper.findByCategoryName(category_name)
    .then(([name]) => {
      if (name) {
        TaskObjectForInsert.category_id = name.id;
       
      }
      else{
          Helper.addCategoryName(category_name)
          .then(([id]) => {
            TaskObjectForInsert.category_id = id;
            
          })
          .catch((err) => res.status(500).json({ message: err }));
      }
    })  

    .catch((err) => res.status(500).json({ message: err }));

  //   Helper.add(taskData)
  //   .then(response => {
  //     res.status(200).json({ data: response });
  //   })
  Helper.add(TaskObjectForInsert)
  .then(resp => {
    res.status(200).json({data: resp});
  })
  .catch((err) => res.status(500).json({ message: err }));

};

const deleteTaskHandler = (req, res) => {
    const { task_id, user_id } = req.params;
    const id = task_id
    Helper.remove(id, user_id)
      .then((tasks) => {
        res.status(201).json({message: "task deleted"});
      })
      .catch((err) => res.status(500).json({ message: err }));
  };

module.exports = {
  findByIDHandler,
  getAllTasksHandler,
  findAllTasksByUserIDHandler,
  insertTaskHandler,
  deleteTaskHandler
};
