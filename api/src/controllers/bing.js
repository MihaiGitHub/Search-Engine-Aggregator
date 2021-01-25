var Bing = require("bing-search-api");
var client = new Bing();

// return search results to frontend
exports.read = async (req, res) => {
  try {
    client
      .web("query")
      .then(function (result) {
        console.log("result ", result);
        res.json(result);
      })
      .catch(function (error) {
        console.log("error ", error);
        res.json(error);
      });
  } catch (err) {
    console.log("err ", err);
    return res.json(err);
  }
};
