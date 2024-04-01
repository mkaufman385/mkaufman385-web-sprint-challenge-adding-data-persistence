const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getAll()

    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Problem from PROJECT router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
