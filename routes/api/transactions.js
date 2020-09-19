const router = require("express").Router();
const transactionsController = require("../../controllers/transactionsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(transactionsController.findAll)
  .post(transactionsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(transactionsController.findById)
  .put(transactionsController.update)
  .delete(transactionsController.remove);

module.exports = router;