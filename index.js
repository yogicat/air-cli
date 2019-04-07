'use strict'
const ora = require('ora')
const render = require('./render')

const { setToken, getData } = require('./utils')

const air = async (input, flags) => {
  const loader = ora().start()

  if (flags.add) {
    loader.stop()
    return !input
      ? render.displayError('Please type valid Token')
      : setToken(input)
  } else if (!input) {
    loader.stop()

    return render.displayError('Please Type City!')
  } else {
    loader.stop()
    if (!process.env.TOKEN) {
      return render.displayError('No Token Found')
    }

    const data = await getData(input)

    if (data.status === 'ok') {
      loader.stop()
      return render.displayData(data)
    } else {
      loader.stop()
      return render.displayError('City Not Found')
    }
  }
}

module.exports = air
