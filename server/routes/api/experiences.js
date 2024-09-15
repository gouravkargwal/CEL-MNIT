const express = require("express");
const auth = require("../../middleware/auth");
const router = express.Router();
const Experience = require("../../models/Experience");

router.get("/search", async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const experiences = await Experience.find({
      $or: [{ title }],
    });
    res.json({ data: experiences });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/filter", async (req, res) => {
  const { query } = req.query;

  try {
    const company = new RegExp(query, "i");

    const experiences = await Experience.find({
      $or: [{ company }],
    });

    res.json({ data: experiences });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// GET ALL interview experience
router.get("/", (req, res) => {
  const { company } = req.query;
  if (company) {
    Experience.find({ company })
      .then((experiences) => res.json(experiences))
      .catch((error) => {
        res.status(404).json(error);
      });
  } else {
    Experience.find()
      .then((experiences) => res.json(experiences))
      .catch((error) => {
        res.status(404).json(error);
      });
  }
});

// ADD interview experience
router.post("/", auth, (req, res) => {
  const experience = req.body;
  Experience.create({ ...experience, creator: req.userId })
    .then((experience) => {
      res.json(experience);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

// UPDATE interview experience
router.patch("/:id", auth, (req, res) => {
  Experience.findByIdAndUpdate(req.params.id, req.body)
    .then((experience) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// POST a comment on an experience
router.post("/:id/comment", async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const experience = await Experience.findById(id);

  experience.comments.push(value);
  const updatedExperience = await Experience.findByIdAndUpdate(id, experience, {
    new: true,
  });

  res.json(updatedExperience);
});

// DELETE a interview experience
router.delete("/:id", auth, (req, res) => {
  Experience.findByIdAndRemove(req.params.id, req.body)
    .then((experience) =>
      res.json({ mgs: "Experience entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such an Experience" }));
});

module.exports = router;
