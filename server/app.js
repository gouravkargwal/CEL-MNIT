const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

const coursesRoutes = require("./routes/api/courses");
const experiencesRoutes = require("./routes/api/experiences");
const userRoutes = require("./routes/api/users");
const blogsRoutes = require("./routes/api/blogs");
const opportunitiesRoutes = require("./routes/api/opportunities");

app.use(express.json({ extended: false }));
app.use(cors());
//connectDB
connectDB();

//app.get("/", (req, res) => res.send("Hello world!"));

//using routes
app.use("/courses", coursesRoutes);
app.use("/ptcell", experiencesRoutes);
app.use("/user", userRoutes);
app.use("/ptcell/blogs", blogsRoutes);
app.use("/ptcell/jobs", opportunitiesRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
