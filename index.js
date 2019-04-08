'use strict'
const ora = require('ora')

const { setToken, searchData, displayHelp } = require('./utils')

const air = (input, flags) => {
  const loader = ora().start()

  if (flags.add) {
    loader.stop()
    return setToken(input)
  }

  if (flags.in) {
    loader.stop()
    return searchData(input)
  }

  loader.stop()
  return displayHelp()
}

module.exports = air
