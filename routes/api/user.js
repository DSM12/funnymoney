const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/CreateNewAcct")
  .post(userController.create);

// router.route("/")
//   .get("mongodb://localhost/funnymoney"), function(req,res){
//     var User = mongoose.model('User', userSchema);

//     User.find({'User':'UserName'}, 'UserName Password', function (err,Users){
//       if (err) return handleError(err);
//     })
//   }

module.exports = router;