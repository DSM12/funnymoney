const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");


router.
  route("/api/addexpense")
  .post(expenseController.create);


  

module.exports = router;