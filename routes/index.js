const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const dbRoutes = require("./db");

// API Routes
router.use("/api", apiRoutes); // for Google requests
router.use("/db", dbRoutes); // for local mongo DB


module.exports = router;
