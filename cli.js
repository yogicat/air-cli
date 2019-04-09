#!/usr/bin/env node
'use strict'
const meow = require('meow')
const { addToken, fetchData, getToken, removeToken } = require('./index')
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
      token: {
        type: 'boolean',
        alias: 't'
      },
      remove: {
        type: 'boolean',
        alias: 'r'
      },
      in: {
        type: 'boolean',
        alias: 'i'
      }
    }
  }
)

const input = cli.input[0]
const { add: ADD, in: IN, token: TOKEN, remove: REMOVE } = cli.flags

if (ADD) {
  addToken(input)
} else if (IN) {
  fetchData(input)
} else if (TOKEN) {
  getToken()
} else if (REMOVE) {
  removeToken()
} else {
  cli.showHelp()
}
