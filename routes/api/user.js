const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.
  route("/CreateNewAcct")
  .post(userController.create);

router.
  route("/")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
  //find out how to check what is entered from the form in the Login component and check that against the database

module.exports = router;