const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  lastDateOfApply: { type: Date },
  jobLink: { type: String, required: true },
  company: { type: String, required: true },
});

JobSchema.set("timestamps", true);

module.exports = Job = mongoose.model("job", JobSchema);
