const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/user");
const transactionRoutes = require("./api/transactions");


// API Routes
router.use("/api/transactions", transactionRoutes);
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app[]
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
);
module.exports = router;