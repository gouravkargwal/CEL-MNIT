const express = require("express");
const router = express.Router();
const Jobs = require("../../models/Job");

// @route GET api/Jobs
// @description Get all Jobs
// @access Public
router.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    Jobs.find({ name })
      .then((c) => {
        res.json(c);
      })
      .catch((err) => {
        res.status(404).json({ noJobsFound: "noJobsFound" });
        console.log(err);
      });
  } else {
    Job.find()
      .then((c) => {
        res.json(c);
      })
      .catch((err) => {
        res.status(404).json({ noJobsFound: "noJobsFound" });
        console.log(err);
      });
  }
});

router.post("/", (req, res) => {
  Job.create(req.body)
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((e) => {
      res.status(400).json({ error: e });
      console.log(e);
    });
});

module.exports = router;
