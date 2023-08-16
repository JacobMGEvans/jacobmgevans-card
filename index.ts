#!/usr/bin / env node
"use strict";

import { chmodSync, rmSync, writeFileSync, readFileSync } from "node:fs";

const chalk = (await import("chalk")).default;
const boxen = (await import("boxen")).default;

const data = {
  name: chalk.white(`               Jacob Evans`),
  handle: chalk.white(`jacobmgevans`),
  work: chalk.white(`FullStack Software Engineer`),
  opensource:
    chalk.white(
      `https://osrg.t3.gg/ & https://tutorial-quest.vercel.app/docs/en/tutorial-quest`
    ) +
    ` ` +
    chalk.blue(`⚛`),
  twitter: chalk.gray(`https://twitter.com/`) + chalk.cyan(`JacobMGEvans`),
  github: chalk.gray(`https://github.com/`) + chalk.green(`JacobMGEvans`),
  linkedin:
    chalk.gray(`https://linkedin.com/in/`) + chalk.blue(`jacob-m-g-evans`),
  web: chalk.cyan(`https://dev.to/jacobmgevans`),
  npx:
    chalk.red(`npx`) +
    ` ` +
    chalk.white(`@jacobmgevans/card  (via GitHub Package Registry)`),
  labelWork: chalk.white.bold(`       Work:`),
  labelOpenSource: chalk.white.bold(`Open Source:`),
  labelTwitter: chalk.white.bold(`    Twitter:`),
  labelnpm: chalk.white.bold(`        npm:`),
  labelGitHub: chalk.white.bold(`     GitHub:`),
  labelLinkedIn: chalk.white.bold(`   LinkedIn:`),
  labelWeb: chalk.white.bold(`        Web:`),
  labelCard: chalk.white.bold(`       Card:`),
} as const;

const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

export const output =
  heading +
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

// Create card file and write to disk
chmodSync("./dist", "755");
writeFileSync(`./dist/output`, chalk.green(boxen(output, { padding: 1 })));
const card = readFileSync(`./dist/output`);
console.log(card.toString());
