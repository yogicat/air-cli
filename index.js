'use strict'
const Conf = require('conf')
const axios = require('axios')
const { displaySucess, displayError, displayData } = require('./render')
const url = 'http://api.waqi.info/feed/'
const config = new Conf()

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
    if (!input) throw 'Please provide location'
    if (!token) throw 'invalid token'
    const { data } = await axios.get(`${url}${input}/?token=${token}`)
    if (data.status === 'error') throw 'Fetching error'
    displayData(data)
  } catch (e) {
    displayError(e)
  }
}

module.exports = { addToken, getToken, removeToken, fetchData }
