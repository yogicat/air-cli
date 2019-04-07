'use strict'
const axios = require('axios')
const ora = require('ora')
const render = require('./render')

const air = async input => {
  const url = 'http://api.waqi.info/feed/'
  const loader = ora().start()
  const { data } = await axios.get(`${url}${input}/?token=${process.env.TOKEN}`)

  if (!input) {
    loader.stop()
    return render.displayError('Please Type City!')
  }

  if (data.status === 'ok') {
    loader.stop()
    return render.displayData(data)
  } else {
    loader.stop()
    return render.displayError('City Not Found')
  }
}

module.exports = air
