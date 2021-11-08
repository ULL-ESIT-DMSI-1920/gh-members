#!/home/gitpod/.nvm/versions/node/v16.13.0/bin/node

const ins = require("util").inspect;
const deb = (...args) => { 
    if (debug) console.log(ins(...args, {depth: null})); 
};

const fs = require("fs");
const shell = require('shelljs');
const { Command } = require('commander');
const program = new Command();

program.version('8.3.0')


program
  .option('-r, --repo <repo>', 'Repository')
  .option('-o, --owner <owner>', 'Owner')

program.parse(process.argv);

const options = program.opts();

if (options.repo) console.log(`Repository: ${options.repo}`);

if (options.owner) console.log(`Owner: ${options.owner}`);