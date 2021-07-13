const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const userRoute = require("./routes/user");

app.use(express.json());
app.use("/api/user", userRoute);

mongoose.connect(
  "mongodb://mongo:27017/docker-node-mongo",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("success connect to DB")
);

app.listen(port, () => console.log(`Server run in port ${port}`));
