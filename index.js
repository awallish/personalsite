const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const exphbs = require("express-handlebars");
const request=require('request');
const csv=require('csvtojson');
const handlebars = exphbs.handlebars;
const app = express();
const http = require("http").Server(app);
const PORT = process.env.PORT || 5000;



app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/public", express.static("public"));


app.get("/", function(req, res) {
    res.render("home");
})

app.get("/poker", async function(req, res) {


    const jsonArray=await csv().fromStream(request.get("https://raw.githubusercontent.com/awallish/personalsite/master/poker.csv"));
    console.log(JSON.stringify(jsonArray));
    res.render("poker", {data: JSON.stringify(jsonArray)});


})

http.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})