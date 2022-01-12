const express = require("express");
const auth = require("../../middleware/auth");
const router = express.Router();
const Opportunity = require("../../models/Opportunity");

// GET ALL opportunity
router.get("/", (req, res) => {
  const { company } = req.query;
  if (company) {
    Opportunity.find({ company })
      .then((opportunities) => res.json(opportunities))
      .catch((error) => {
        res.status(404).json(error);
      });
  } else {
    Opportunity.find()
      .then((opportunities) => res.json(opportunities))
      .catch((error) => {
        res.status(404).json(error);
      });
  }
});

// ADD opportunity
router.post("/", auth, (req, res) => {
  const opportunity = req.body;
  Opportunity.create({ ...opportunity, creator: req.userId })
    .then((opportunity) => {
      res.json(opportunity);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

// UPDATE opportunity
router.patch("/:id", auth, (req, res) => {
  Opportunity.findByIdAndUpdate(req.params.id, req.body)
    .then((opportunity) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// POST a comment on an opportunity
router.post("/:id/comment", async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const opportunity = await Opportunity.findById(id);

  opportunity.comments.push(value);
  const updatedOpportunity = await Opportunity.findByIdAndUpdate(
    id,
    opportunity,
    {
      new: true,
    }
  );

  res.json(updatedOpportunity);
});

// DELETE an opportunity
router.delete("/:id", auth, (req, res) => {
  Opportunity.findByIdAndRemove(req.params.id, req.body)
    .then((opportunity) =>
      res.json({ mgs: "Opportunity entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such an Opportunity" }));
});

module.exports = router;
