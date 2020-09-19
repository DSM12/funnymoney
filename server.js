const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/funnymoney",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
