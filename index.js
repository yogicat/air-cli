'use strict'
const Conf = require('conf')
const axios = require('axios')
const { displaySucess, displayError, displayData } = require('./render')

const config = new Conf({ projectName: 'air-cli' })

const url = 'http://api.waqi.info/feed/'

const addToken = token => {
  try {
    if (!token) throw 'Please provide token'
    config.set('APIKEY', token)
    displaySucess(`Token ${token} Saved`)
  } catch (e) {
    displayError(e)
  }
}

const getToken = () => {
  const token = config.get('APIKEY') || undefined
  displaySucess(token ? `Saved token : ${token}` : 'No token saved.')
}

const removeToken = () => {
  config.clear()
  displaySucess('Token Removed')
}

const fetchData = async input => {
  try {
    const token = config.get('APIKEY')
    if (!token) throw 'Please use valid token'
    if (!input) throw 'Please provide location'
    const { data } = await axios.get(`${url}${input}/?token=${token}`)
    if (data.status === 'error') throw 'Fetching error'
    displayData(data)
  } catch (e) {
    displayError(e)
  }
}

module.exports = { addToken, getToken, removeToken, fetchData }
