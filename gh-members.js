#!/home/usuario/.nvm/versions/node/v14.18.0/bin/node
//#!/home/gitpod/.nvm/versions/node/v16.13.0/bin/node

const ins = require("util").inspect;
const deb = (...args) => { 
    if (debug) console.log(ins(...args, {depth: null})); 
};

const fs = require("fs");
const shell = require('shelljs');
const { Command } = require('commander');
const program = new Command();

const config = require('./package.json');

if (!shell.which('git')) shell.echo("Git not installed.")
if (!shell.which('gh')) shell.echo("gh not installed.")

program
  .version(config.version)
  .option('-r, --repo <repo>', 'Repository')
  .option('-o, --owner <owner>', 'Owner')

program.parse(process.argv);

const options = program.opts();

if (!options.owner){
  if(program.args.length < 2){
    console.log("No arguments specified. Sending help.")

    program.help();
  }
}

if (options.repo) console.log(`Repository: ${options.repo}`);

if (options.owner) console.log(`Owner: ${options.owner}`);