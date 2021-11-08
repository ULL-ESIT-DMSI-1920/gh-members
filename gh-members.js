#!/home/gitpod/.nvm/versions/node/v16.13.0/bin/node

const ins = require("util").inspect;
const deb = (...args) => { 
    if (debug) console.log(ins(...args, {depth: null})); 
};

const fs = require("fs");
const shell = require('shelljs');
const { Command } = require('commander');
const program = new Command();

if (!shell.which('git')) shell.echo("Git not installed.")
if (!shell.which('gh')) shell.echo("gh not installed.")

program
  .version('8.3.0')
  .option('-r, --repo <repo>', 'Repository')
  .option('-o, --owner <owner>', 'Owner')

program.parse(process.argv);

const options = program.opts();

const owner;

if (!options.owner){
  if(program.args.length < 2){
    console.log("No arguments specified. Sending help.")

    program.help();
  }
}


if (options.repo) console.log(`Repository: ${options.repo}`);

if (options.owner) console.log(`Owner: ${options.owner}`);