//Schemma for placement portal!
const mongoose = require("mongoose");
const reqString = {
  type: String,
  required: true,
};

const ExperienceSchema = new mongoose.Schema({
  title: reqString,
  description: reqString,
  role: reqString,
  questions: ["Mixed"],
  name: String,
  creator: String,
  company: String,
  upvotes: { type: Number, default: 0 },
  comments: { type: [String], default: [] },
});

ExperienceSchema.set("timestamps", true);

module.exports = Experience = mongoose.model("experience", ExperienceSchema);
