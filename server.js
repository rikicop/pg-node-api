const express = require("express");
const studentRoutes = require("./src/student/routes");
const app = express();
const PORT = 3000;

app.use(express.json());

const client = require("./elephantsql");

/* app.get("/links", async (req, res) => {
  try {
    const results = await client.query("SELECT * FROM links");
    res.json(results);
  } catch (err) {
    console.log(err);
  }
}); */

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
