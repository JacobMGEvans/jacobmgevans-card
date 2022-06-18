"use strict";
const chalk = (await import("chalk")).default;
const boxen = (await import("boxen")).default;
const { chmodSync, rmSync, writeFileSync } = await import("fs");
const { join } = await import("path");
const data = {
    name: chalk.white(`               Jacob Evans`),
    handle: chalk.white(`jacobmgevans`),
    work: chalk.white(`FullStack Software Engineer`),
    opensource: chalk.white(`https://osrg.t3.gg/ & https://tutorial-quest.vercel.app/docs/en/tutorial-quest`) +
        ` ` +
        chalk.blue(`⚛`),
    twitter: chalk.gray(`https://twitter.com/`) + chalk.cyan(`JacobMGEvans`),
    github: chalk.gray(`https://github.com/`) + chalk.green(`JacobMGEvans`),
    linkedin: chalk.gray(`https://linkedin.com/in/`) + chalk.blue(`jacob-m-g-evans`),
    web: chalk.cyan(`https://dev.to/jacobmgevans`),
    npx: chalk.red(`npx`) +
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
};
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;
export const output = heading +
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
writeFileSync("bin/output", chalk.green(boxen(output)));
chmodSync("./dist", "755");
rmSync("./dist", { recursive: true });
