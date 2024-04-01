const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getAll()

    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Problem from TASK router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
