const mongoose = require("mongoose");
const reqString = {
  type : String,
  required : true
}

const CourseSchema = new mongoose.Schema({
  title : reqString,
  description : reqString,
  image : reqString,
  tags : reqString,
  link : reqString,
  upvotes : Number
});

CourseSchema.set("timestamps", true);

module.exports = Course = mongoose.model("course", CourseSchema);