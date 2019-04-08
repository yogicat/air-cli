const fs = require('fs')
const path = require('path')
const axios = require('axios')
const render = require('./render')

const setToken = token => {
  if (token === undefined) {
    render.displayErrorMessage('* Missing token value *')
    process.exit(1)
  }
  fs.writeFileSync(path.join(__dirname, '.env'), `TOKEN=${token}`, () => {
    render.displaySucess('Token Saved')
    process.exit(0)
  })
}

const getData = async input => {
  if (input === undefined) {
    render.displayErrorMessage('* Missing location *')
    process.exit(1)
  }

  if (!process.env.TOKEN) {
    render.displayTokenError()
    process.exit(1)
  }

  try {
    const url = 'http://api.waqi.info/feed/'
    const { data } = await axios.get(
      `${url}${input}/?token=${process.env.TOKEN}`
    )
    return data
  } catch (err) {
    render.displayError(err)
    process.exit(1)
  }
}

const searchData = async input => {
  const data = await getData(input)

  if (data.status !== 'ok') {
    render.displayErrorMessage('* No city found *')
    process.exit(1)
  }

  render.displayData(data)
}

const displayHelp = () => {
  render.displayHelpGuide()
}

module.exports = {
  setToken,
  searchData,
  displayHelp
}
