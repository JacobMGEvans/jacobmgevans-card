'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('               Jacob Evans'),
  handle: chalk.white('jacobmgevans'),
  work: chalk.white('Associate Software Engineer'),
  opensource: chalk.white('Koajs/router & Create React App') + ' ' + chalk.blueBright('⚛'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('jacobmgevans'),
  github: chalk.gray('https://github.com/') + chalk.green('jacobmgevans'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blueBright('jacobmgevans'),
  web: chalk.cyan('https://dev.to/jacobmgevans'),
  npx: chalk.red('npx') + ' ' + chalk.white('@jacobmgevans/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + 
               newline + newline + 
               working + newline + 
               opensourcing + newline + newline + 
               twittering + newline + 
               githubing + newline + 
               linkedining + newline + 
               webing + newline + newline + 
               carding 

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
