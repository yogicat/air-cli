#!/usr/bin/env node
'use strict'
require('dotenv').config()

const meow = require('meow')
const air = require('./index')

const cli = meow(
  `
  Usage
    Search by city
    $ air --in <city>

    Add api-token
    $ air --add <Your Token Value>

    Options
      --add, -a         Add API Token
      --in, -i          Search by location
      --help, -h        Display Hepl

    Examples
    $ air --in here ............. Show Air Quality based on curreent location
    $ air --in Seoul ............ Show Air Quality in Seoul
    $ air --add 2zd82s .......... Add API Token
    $ air --help ................ Show Help

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
      },
      in: {
        type: 'boolean',
        alias: 'i'
      }
    }
  }
)

air(cli.input[0], cli.flags)
