const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

// import routes
const duckduckgoRoutes = require("./routes/duckduckgo");
const googleRoutes = require("./routes/google");
const bingRoutes = require("./routes/bing");

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json()); // get json data from request body
app.use(cookieParser()); // store user data in cookie
app.use(cors()); // allow api to handle requests coming from different origins

// use routes as middleware
app.use("/api", duckduckgoRoutes);
app.use("/api", googleRoutes);
app.use("/api", bingRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
