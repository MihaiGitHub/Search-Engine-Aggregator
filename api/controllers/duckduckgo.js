// module for parsing form data and file uploads
const formidable = require("formidable");
const { duckIt } = require("node-duckduckgo");

// return search results to frontend
exports.read = async (req, res) => {
  try {
    const result = await duckIt(req.body.searchTerm);
    // console.log(result.data.AbstractText);

    return res.json(result.data);
  } catch (err) {
    return res.json(err);
  }
};
