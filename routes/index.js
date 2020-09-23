const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/user");
const transactionRoutes = require("./api/transactions");


// API Routes
router.use("/api/transactions", transactionRoutes);
router.use("/api", userRoutes);

// If no API routes are hit, send the React app[]
router.use("*", (req, res) => {
  console.log("anythigldlak");
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
});
module.exports = router;