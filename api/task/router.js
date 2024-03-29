const router = require("express").Router();

router.use("*", (req, res) => {
  res.json({ api: "FROM TASK ROUTER" });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Problem from TASK router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
