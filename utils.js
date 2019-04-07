const fs = require('fs')
const path = require('path')
const axios = require('axios')
const render = require('./render')

const setToken = token => {
  fs.writeFileSync(path.join(__dirname, '.env'), `TOKEN=${token}`, () => {
    render.displayConsole('Token Saved')
    process.exit(0)
  })
}

const getData = async location => {
  try {
    const url = 'http://api.waqi.info/feed/'
    const { data } = await axios.get(
      `${url}${location}/?token=${process.env.TOKEN}`
    )
    return data
  } catch (err) {
    return render.displayError(err)
  }
}

module.exports = {
  setToken,
  getData
}
