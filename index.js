'use strict'
const render = require('./render')
const { setToken, searchData, displayHelp } = require('./utils')

const air = (input, flags) => {
  if (flags.add) {
    if (!input) {
      render.displayErrorMessage('Missing token value')
      process.exit(1)
    } else {
      return setToken(input)
    }
  }

  if (flags.in) {
    if (!input) {
      render.displayErrorMessage('Missing location')
      process.exit(1)
    } else {
      return searchData(input)
    }
  }

  return displayHelp()
}

module.exports = air
