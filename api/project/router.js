const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getProjectById(req.params.project_id)
    .then((project) => {
      res.status(200).json(project);
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
