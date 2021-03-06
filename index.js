#!/usr/bin/env node

const cliparse = require('cliparse');
const pkg = require('./package.json');
const fs = require('fs');

const compile = require('./lib/compile');

cliparse.parse(cliparse.cli({
  name: 'concise-cli',
  description: 'Command-line Interface for Concise Framework',
  version: pkg.version,
  commands: [
    cliparse.command(
      'compile', {
        description: 'Compile code from Concise Framework',
        args: [
          cliparse.argument('input', { description: 'File to compile' }),
          cliparse.argument('output', { description: 'Output CSS file' })
        ]
      }, (params) => {
        fs.writeFile(params.args[1], compile(params.args[0]), (err) => {
          if (err) {
            throw err;
          }

          console.log(`File written: ${params.args[1]}\nFrom: ${params.args[0]}`);
        })
      }
    )
  ]
}));
