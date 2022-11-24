require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 1000;

// import routers
const userRouter = require("./routes/userRoute.js");
const bannerRouter = require("./routes/bannerRoute.js");
const popularCourseRouter = require("./routes/popularCourseRoute");
const foundationCourseRoute = require("./routes/foundationCourseRoute.js");

// user express
const app = express();

// use app
app.use(cors());
app.use(express.json());

// root server
app.get("/", (req, res) => {
  res.send({
    message: "skill-hero server",
    date: new Date().toLocaleDateString(),
  });
});

// user routers
app.use("/api/user", userRouter);
app.use("/api/banner", bannerRouter);
app.use("/api/popularCourses", popularCourseRouter);
app.use("/api/foundationCourse", foundationCourseRoute);

// mongodb connection
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("database connected");
    // port listening
    app.listen(port, () => {
      console.log(`server is 😎 running: ${port}`);
    });
  })
  .catch((error) => {
    console.log({ error: error.message });
  });
