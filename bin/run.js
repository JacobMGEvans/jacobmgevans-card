#!/usr/bin/env node

import { execSync } from "node:child_process";
import { join } from "node:path";

console.log(
  execSync(`node ${join(process.cwd(), "dist/index.js")}`).toString()
);
