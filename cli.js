#!/usr/bin/env node
'use strict'
require('dotenv').config()

const meow = require('meow')
const air = require('./index')

const cli = meow(
  `
  Usage
    Search by city
    $ air <city>

    Add api-token
    $ air <Your Token Value> --add

    Examples
    $ air here ................... Show Air Quality on curreent location
    $ air Seoul .................. Show Air Quality in Seoul
    $ air x3ed91 --add, -a ....... Add API Token
    $ air --help, -h ............. Show Help

    API
    https://aqicn.org/api/
`,
  {
    flags: {
      help: {
        type: 'boolean',
        alias: 'h'
      },
      add: {
        type: 'boolean',
        alias: 'a'
      }
    }
  }
)

air(cli.input[0], cli.flags)
