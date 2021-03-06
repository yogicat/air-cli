#!/usr/bin/env node
'use strict'
const pkg = require('./package.json')
const Configstore = require('configstore')
const meow = require('meow')
const axios = require('axios')

const { displaySuccess, displayError, displayData } = require('./render')
const url = 'http://api.waqi.info/feed/'
const conf = new Configstore(pkg.name)
const cli = meow(
  `
  Usage
    Search by city
    $ air --in <city>

    Add api-token
    $ air --add <Your Token Value>

    Options
      --add, -a         Add API Token
      --token,-t        Show saved token
      --remove, -r      Remove token
      --in, -i          Search by location
      --help, -h        Display Heol

    Examples
    $ air --in here ............. Show Air Quality based on current location
    $ air --in Seoul ............ Show Air Quality in Seoul
    $ air --add 2zd82s .......... Add API Token
    $ air --token ............... Show saved token
    $ air --help ................ Show Help

    API
    https://aqicn.org/api/
`,
  {
    flags: {
      help: {
        type: 'boolean',
        alias: 'h',
      },
      add: {
        type: 'boolean',
        alias: 'a',
      },
      token: {
        type: 'boolean',
        alias: 't',
      },
      remove: {
        type: 'boolean',
        alias: 'r',
      },
      in: {
        type: 'boolean',
        alias: 'i',
      },
    },
  }
)

const input = cli.input[0]
const { add: ADD, in: IN, token: TOKEN, remove: REMOVE } = cli.flags

const fetchData = async (input) => {
  try {
    const token = conf.get('APIKEY')
    if (!token) throw 'Please use valid token'
    if (!input) throw 'Please provide location'
    const { data } = await axios.get(`${url}${input}/?token=${token}`)
    if (data.status === 'error') throw 'Fetching error'
    displayData(data)
  } catch (e) {
    displayError(e)
  }
}

if (ADD) {
  try {
    if (!input) throw 'Please provide token'
    conf.set('APIKEY', input)
    displaySuccess(`Token ${input} Saved in ${conf.path}`)
  } catch (e) {
    displayError(e)
  }
} else if (IN) {
  fetchData(input)
} else if (TOKEN) {
  const token = conf.get('APIKEY') || undefined
  displaySuccess(token ? `Saved token : ${token}` : 'No token saved.')
} else if (REMOVE) {
  conf.clear()
  displaySuccess('Token Removed')
} else {
  cli.showHelp()
}
