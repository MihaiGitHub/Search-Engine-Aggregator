const google = require("google-search-results");

// return search results to frontend
exports.read = async (req, res) => {
  try {
    google(req.body.searchTerm, function (result) {
      return res.json(result);
    });
  } catch (err) {
    return res.json(err);
  }
};
