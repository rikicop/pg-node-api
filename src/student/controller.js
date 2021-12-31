const client = require("../../elephantsql");

const getStudents = async (req, res) => {
  try {
    const results = await client.query("SELECT * FROM links");
    res.json(results.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getStudents,
};
