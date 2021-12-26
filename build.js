"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var boxen_1 = require("boxen");
var fs_1 = require("fs");
var path_1 = require("path");
var data = {
    name: chalk_1["default"].white("               Jacob Evans"),
    handle: chalk_1["default"].white("jacobmgevans"),
    work: chalk_1["default"].white("Associate Software Engineer"),
    opensource: chalk_1["default"].white("https://osrg.t3.gg/ & https://tutorial-quest.vercel.app/docs/en/tutorial-quest") +
        " " +
        chalk_1["default"].blue("⚛"),
    twitter: chalk_1["default"].gray("https://twitter.com/") + chalk_1["default"].cyan("jacobmgevans"),
    github: chalk_1["default"].gray("https://github.com/") + chalk_1["default"].green("jacobmgevans"),
    linkedin: chalk_1["default"].gray("https://linkedin.com/in/") + chalk_1["default"].blue("jacobmgevans"),
    web: chalk_1["default"].cyan("https://dev.to/jacobmgevans"),
    npx: chalk_1["default"].red("npx") +
        " " +
        chalk_1["default"].white("@jacobmgevans/card  (via GitHub Package Registry)"),
    labelWork: chalk_1["default"].white.bold("       Work:"),
    labelOpenSource: chalk_1["default"].white.bold("Open Source:"),
    labelTwitter: chalk_1["default"].white.bold("    Twitter:"),
    labelnpm: chalk_1["default"].white.bold("        npm:"),
    labelGitHub: chalk_1["default"].white.bold("     GitHub:"),
    labelLinkedIn: chalk_1["default"].white.bold("   LinkedIn:"),
    labelWeb: chalk_1["default"].white.bold("        Web:"),
    labelCard: chalk_1["default"].white.bold("       Card:")
};
var newline = "\n";
var heading = "".concat(data.name, " / ").concat(data.handle);
var working = "".concat(data.labelWork, "  ").concat(data.work);
var opensourcing = "".concat(data.labelOpenSource, "  ").concat(data.opensource);
var twittering = "".concat(data.labelTwitter, "  ").concat(data.twitter);
var githubing = "".concat(data.labelGitHub, "  ").concat(data.github);
var linkedining = "".concat(data.labelLinkedIn, "  ").concat(data.linkedin);
var webing = "".concat(data.labelWeb, "  ").concat(data.web);
var carding = "".concat(data.labelCard, "  ").concat(data.npx);
var output = heading +
    newline +
    newline +
    working +
    newline +
    opensourcing +
    newline +
    newline +
    twittering +
    newline +
    githubing +
    newline +
    linkedining +
    newline +
    webing +
    newline +
    newline +
    carding;
(0, fs_1.writeFileSync)((0, path_1.join)(__dirname, "bin/output"), chalk_1["default"].green((0, boxen_1["default"])(output)));
