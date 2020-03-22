#!/usr/bin/env node
"use strict";

const program = require("commander");
const chalk = require("chalk");
const Bundler = require("parcel-bundler");

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

program
  .name("elm-blockup")
  .usage("[options] [command]")
  .version("0.0.1");

program
  .command("serve")
  .description("serve the block")
  .action(serveBlock);

program.parse(process.argv);
