const router = require("express").Router();
const Resource = require("./model");
const db = require("../../data/dbConfig");

router.get("/", (req, res, next) => {
  Resource.getAll()

    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", async (req, res) => {
  try {
    const [resource_id] = await db("resources").insert(req.body);
    const resource = await db("resources").where({ resource_id }).first();
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Problem from RESOURCE router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
