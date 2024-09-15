//Schemma for placement portal!
const mongoose = require("mongoose");
const reqString = {
  type: String,
  required: true,
};

const OpportunitySchema = new mongoose.Schema({
  title: reqString,
  description: reqString,
  role: reqString,
  name: String,
  creator: String,
  company: String,
  comments: { type: [String], default: [] },
});

OpportunitySchema.set("timestamps", true);

module.exports = Opportunity = mongoose.model("opportunity", OpportunitySchema);
