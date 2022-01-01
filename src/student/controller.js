const client = require("../../elephantsql");
const queries = require("./queries");

const getLinks = async (req, res) => {
  try {
    const results = await client.query(queries.getLinks);
    res.json(results.rows);
  } catch (err) {
    console.log(err);
  }
};

const getLinkById = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await client.query(queries.getLinkById, [id]);
    res.json(results.rows);
  } catch (err) {
    console.log(err);
  }
};

const addLink = async (req, res) => {
  //destructuring links object
  const { url, name, description } = req.body;
  //check if url exists
  try {
    const results = await client.query(queries.getLinkByUrl, [url]);
    if (results.rows.length > 0) {
      res.status(400).json({ error: "Url already exists" });
    } else {
      const results = await client.query(queries.addLink, [
        url,
        name,
        description,
      ]);
      res.json(results.rows[0]);
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteLink = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await client.query(queries.getLinkById, [id]);
    if (results.rows.length === 0) {
      res.status(404).json({ error: "Link not found" });
    } else {
      await client.query(queries.deleteLink, [id]);
      //res delete message
      res.json({ message: "Link removed" });
    }
  } catch (err) {
    console.log(err);
  }
};

const updateLink = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await client.query(queries.getLinkById, [id]);
    if (results.rows.length === 0) {
      res.status(404).json({ error: "Link not found" });
    } else {
      const { url, name, description } = req.body;
      const results = await client.query(queries.updateLink, [
        url,
        name,
        description,
        id,
      ]);
      res.json({ message: "Link Updated" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getLinks,
  getLinkById,
  addLink,
  deleteLink,
  updateLink,
};
