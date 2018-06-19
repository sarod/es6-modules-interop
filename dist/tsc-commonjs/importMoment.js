"use strict";
exports.__esModule = true;
var momentStar = require("moment");
var moment_1 = require("moment");
try {
    console.log("momentStar:" + momentStar().toString());
}
catch (e) {
    console.log(e);
}
try {
    console.log("momentDefault:" + moment_1["default"]().toString());
}
catch (e) {
    console.log(e);
}
