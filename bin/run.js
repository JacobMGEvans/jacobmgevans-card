#!/usr/bin/env node

import { execSync, spawnSync } from "node:child_process";
import { resolve, dirname, join } from "node:path";

console.log(
  execSync(`node ${join(process.cwd(), "dist/index.js")}`).toString()
);
