#!/usr/bin/env node
"use strict";

const program = require("commander");
const chalk = require("chalk");
const Bundler = require("parcel-bundler");
const fs = require("fs-extra");
const path = require("path");

const options = {
  outDir: "./dist", // The out directory to put the build files in, defaults to dist
  outFile: "index.html", // The name of the outputFile
  publicUrl: "/", // The url to serve on, defaults to '/'
  watch: true
};

const serveBlock = () => {
  const entryFiles = "./index.html";
  const bundler = new Bundler(entryFiles, options);

  console.log(chalk.greenBright.bold("Serving block..."));

  bundler.serve();
};

const createBLock = () => {
  console.log(chalk.green("Scaffolding a new block... done."));

  // Copy files to destination directory.
  fs.copySync(path.join(__dirname, "../template"), path.join(process.cwd()));
};

program
  .name("elm-blockup")
  .usage("[options] [command]")
  .version("0.0.1");

program
  .command("serve")
  .description("serve a block in the current directory")
  .action(serveBlock);

program
  .command("create")
  .description("create a block in the current directory")
  .action(createBLock);

program.parse(process.argv);
