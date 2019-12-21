
var fs = require('fs');

var _DATA = JSON.parse(fs.readFileSync('data.json')).events.sort(
    (a, b) => (a.timestamp < b.timestamp ? 1 : -1)
);

function allData() {
    return _DATA;
}

function writings() {
    // returns all writings
    return _DATA.slice().filter(x => x.type == "Writing");
}

function projects() {
    // returns all projects
    return _DATA.slice().filter(x => x.type == "Project");
}

function latest() {
    // returns three latest
    return _DATA.slice(0, 3);
}


module.exports = {
    allData: allData,
    writings: writings,
    projects: projects,
    latest: latest,
}