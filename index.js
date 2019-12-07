const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const exphbs = require("express-handlebars");
const handlebars = exphbs.handlebars;
const app = express();
const http = require("http").Server(app);
const PORT = process.env.PORT || 3000;


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/public", express.static("public"));


app.get("/", function(req, res) {
    res.send("hello world!");
})




http.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})