const express = require("express");
const router = express.Router();
const Course = require("../../models/Course");

router.get("/search", async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const courses = await Course.find({
      $or: [{ title }],
    });

    res.json({ data: courses });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/filter", async (req, res) => {
  const { query } = req.query;
  console.log(query);

  try {
    const tags = new RegExp(query, "i");

    const courses = await Course.find({
      $or: [{ tags }],
    });

    res.json({ data: courses });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @route GET api/courses
// @description Get all courses
// @access Public
router.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    Course.find({ name })
      .then((c) => {
        res.json(c);
      })
      .catch((err) => {
        res.status(404).json({ noCoursesFound: "noCoursesFound" });
        console.log(err);
      });
  } else {
    Course.find()
      .then((c) => {
        res.json(c);
      })
      .catch((err) => {
        res.status(404).json({ noCoursesFound: "noCoursesFound" });
        console.log(err);
      });
  }
});

router.post("/", (req, res) => {
  Course.create(req.body)
    .then((courses) => {
      res.json(courses);
    })
    .catch((e) => {
      res.status(400).json({ error: e });
      console.log(e);
    });
});

module.exports = router;
