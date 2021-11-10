#! /usr/bin/env node

const ins = require("util").inspect;
const deb = (...args) => { 
    if (debug) console.log(ins(...args, {depth: null})); 
};

const fs = require("fs");
const shell = require('shelljs');
const { Command } = require('commander');
const program = new Command();

const config = require('./package.json');

if (!shell.which('git')){
  shell.echo("Git not installed.");
  shell.exit(1);
}

if (!shell.which('gh')){
  shell.echo("gh not installed.");
  shell.exit(1);
}

program
  .version(config.version)
  .option('-r, --repo <repo>', 'Repository')
  .option('-o, --owner <owner>', 'Owner')
  .parse(process.argv);

const {args} = program;
const {repo, owner} = program.opts();

if ((!repo || !owner) && args.length === 1){
  console.log("I need more arguments. Sending help.")

  program.help();
  shell.exit(1);
}

console.log(args);

if (repo) console.log(`Repository: ${repo}`);

if (owner) console.log(`Owner: ${owner}`);