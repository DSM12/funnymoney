const app = express;

app.post("/views/createacc", function (req, res) {
    console.log("Creating account");
    console.log(req.body);

    var dbQuery = "INSERT INTO funnymoney (UserName, Password, Email, Phone, FullName) VALUES (?,?,?,?,?)";

    connection.query(dbQuery, [req.body.user_name, req.body.account_password, req.body.account_email, req.body.account_phone, req.body.firstandlast_name], function (err, result) {
        if (err) throw err;
        // console.log("Account successfully saved!");
        res.end();
    });
App.listen(3000);
});