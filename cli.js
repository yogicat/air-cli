#!/usr/bin/env node
'use strict'
require('dotenv').config()

const meow = require('meow')
const air = require('./index')

const cli = meow(
  `
  Usage
    $ air <city>

    Examples
    $ air here ........... Show Air Quality on curreent location
    $ air Seoul .......... Show Air Quality in Seoul
    $ air --help, -h ..... Show Help
`,
  {
    flags: {
      help: {
        type: 'boolean',
        alias: 'h'
      }
    }
  }
)

air(cli.input[0])
