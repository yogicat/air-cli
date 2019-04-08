const axios = require('axios')
const Conf = require('conf')
const render = require('./render')

const config = new Conf()

const setToken = token => {
  config.set('TOKEN', token)
  render.displaySucess('Token Saved')
}

const getData = async input => {
  if (!config.has('TOKEN')) {
    render.displayTokenError()
    process.exit(1)
  }

  try {
    const url = 'http://api.waqi.info/feed/'
    const { data } = await axios.get(
      `${url}${input}/?token=${config.get('TOKEN')}`
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
    render.displayErrorMessage('No city found')
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
