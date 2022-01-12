const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

const coursesRoutes = require("./routes/api/courses");
const experiencesRoutes = require("./routes/api/experiences");
const userRoutes = require("./routes/api/users");
const jobsRoutes = require("./routes/api/jobs");
const opportunitiesRoutes = require("./routes/api/opportunities");

app.use(express.json({ extended: false }));
app.use(cors());
//connectDB
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

//using routes
app.use("/courses", coursesRoutes);
app.use("/experiences", experiencesRoutes);
app.use("/user", userRoutes);
app.use("/jobs", jobsRoutes);
app.use("/opportunities", opportunitiesRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
