#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

console.log(fs.readFileSync(path.join(__dirname, "output"), "utf8"));
