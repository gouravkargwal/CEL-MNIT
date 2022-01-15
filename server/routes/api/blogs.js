const express = require("express");
const router = express.Router();
const Blogs = require("../../models/Blog");

// @route GET api/Blogs
// @description Get all Blogs
// @access Public
router.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    Blogs.find({ name })
      .then((c) => {
        res.json(c);
      })
      .catch((err) => {
        res.status(404).json({ noBlogsFound: "noBlogsFound" });
        console.log(err);
      });
  } else {
    Blogs.find()
      .then((c) => {
        res.json(c);
      })
      .catch((err) => {
        res.status(404).json({ noBlogsFound: "noBlogsFound" });
        console.log(err);
      });
  }
});

router.post("/", (req, res) => {
  Blogs.create(req.body)
    .then((Blogs) => {
      res.json(Blogs);
    })
    .catch((e) => {
      res.status(400).json({ error: e });
      console.log(e);
    });
});

module.exports = router;
