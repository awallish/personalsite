const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const exphbs = require("express-handlebars");
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

app.get("/about", function(req, res) {
    res.render("about");
})

app.get("/work", function(req, res) {
    res.render("work");
})

app.get("/projects", function(req, res) {
    res.render("projects");
})

app.get("/writing", function(req, res) {
    res.render("writing");
})

app.get("/api/me", function(req, res) {
    res.send({
        "name": "Alex Wallish",
        "headline": "Software engineer",
        "about": "I a software engineer with three years of experience.",
        "pronouns": "He / Him / His",
        "openToOpportunities": true,
        "skills": [
            "python",
            "java",
            "javascript",
            "node",
            "flask",
            "spring",
            "machine learning",
        ],
        "education" : [
            {
                "name": "University of Maryland",
                "startMonth": 8,
                "start-year": 2017,
                "endMonth": 5,
                "endYear": 2021,
                "currentlyEnrolled": true,
                "degreeType": "bachelor's",
                "major": "Computer Science",
                "GPA": 3.7
            }
        ],
        "work": [
            {
                "company": "Barclays Investment Bank",
                "role": "Software Engineering Intern",
                "startMonth": 6,
                "startYear": 2019,
                "description": "Worked on the research team to develop tools for researchers to use to better understand the markets.",
            }
        ]
    })
})



http.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})