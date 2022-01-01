const getLinks = "SELECT * FROM links";
const getLinkById = "SELECT * FROM links WHERE id = $1";
const getLinkByUrl = "SELECT * FROM links WHERE url = $1";
const addLink =
  "INSERT INTO links (url, name, description) VALUES ($1, $2, $3) RETURNING *";

const deleteLink = "DELETE FROM links WHERE id = $1";
const updateLink =
  "UPDATE links SET url = $1, name = $2, description = $3 WHERE id = $4 RETURNING *";
module.exports = {
  getLinks,
  getLinkById,
  getLinkByUrl,
  addLink,
  deleteLink,
  updateLink,
};
