const express = require("express");
const studentRoutes = require("./src/student/routes");
const app = express();
const PORT = 3000;

app.use(express.json());

const client = require("./elephantsql");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/links", studentRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
