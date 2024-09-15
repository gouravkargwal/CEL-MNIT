if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
//const courseSchema = require('../models/Course');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected...");
    // for(let i=0;i<user.length;i++){
    //     await new courseSchema(user[i]).save();
    // }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
