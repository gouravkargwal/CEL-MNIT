const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  content: { type: String, required: true },
});

BlogSchema.set("timestamps", true);

module.exports = Blog = mongoose.model("Blog", BlogSchema);
