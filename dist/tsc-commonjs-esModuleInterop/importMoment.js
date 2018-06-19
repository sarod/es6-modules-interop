"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var momentStar = __importStar(require("moment"));
var moment_1 = __importDefault(require("moment"));
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
