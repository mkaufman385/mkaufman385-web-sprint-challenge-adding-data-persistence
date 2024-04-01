const router = require("express").Router();

router.use("*", (req, res) => {
  res.json({ api: "resource router working!" });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Problem from RESOURCE router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
