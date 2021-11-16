#! /usr/bin/env node

const ins = require("util").inspect;
const deb = (...args) => {
	if (debug) console.log(ins(...args, { depth: null }));
};

const fs = require("fs");
const shell = require('shelljs');
const { Command } = require('commander');
const program = new Command();

const config = require('./package.json');

if (!shell.which('git')) {
	shell.echo("Git not installed.");
	shell.exit(1);
}

if (!shell.which('gh')) {
	shell.echo("gh not installed.");
	shell.exit(1);
}

program
	.version(config.version)
	.option('-r, --repo', 'List repositories of owner')
	.option('-o, --owner <owner>', 'Specify owner')

program.parse(process.argv);

const { args } = program;
const { repo, owner } = program.opts();

if (!owner) {
	console.log("Owner not specified. Sending help...");

	program.help();
	shell.exit(1);
}

console.log(`\n-- Members of ${owner} --\n`);
shell.exec(`gh api -X GET /orgs/${owner}/members --jq ".[].login"`);

if (repo) {
	console.log(`\n-- Repositories of ${owner} --\n`);
	shell.exec(`gh api -X GET /orgs/${owner}/repos --jq '.[].name'`);
}