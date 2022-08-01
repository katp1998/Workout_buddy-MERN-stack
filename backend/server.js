const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;

const app = express();

//express middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/workouts", require("./routes/workoutRoutes"));

//listening to rq
app.listen(port, () => {
  console.log(`connected to port: ${port}`);
});
