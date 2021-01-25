const express = require("express");
const duckduckgoRouter = require("./routers/duckduckgo");
const googleRouter = require("./routers/google");
const app = express();

// Automatically parse data as a JSON object in all request handlers
app.use(express.json());

app.use(duckduckgoRouter);
app.use(googleRouter);

module.exports = app;
