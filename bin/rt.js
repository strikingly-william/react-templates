#!/usr/bin/env node
'use strict'
const cli = require('../src/cli') //src
// console.log(process.argv);
const exitCode = cli.execute(process.argv)
/*eslint no-process-exit:0*/
process.exit(exitCode)
