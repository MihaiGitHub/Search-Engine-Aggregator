const { duckIt } = require("node-duckduckgo");

// return search results to frontend
exports.read = async (req, res) => {
  try {
    const result = await duckIt(req.body.searchTerm);

    return res.json(result.data);
  } catch (err) {
    return res.json(err);
  }
};
