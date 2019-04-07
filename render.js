const chalk = require('chalk')
const emoji = require('node-emoji')
const { log } = require('console')

class Render {
  _getDescription(aqi) {
    if (aqi > 0 && aqi <= 50) {
      return {
        emoji: 'thumbsup',
        level: 'Good'
      }
    } else if (aqi > 50 && aqi <= 100) {
      return {
        emoji: 'ok_hand',
        level: 'Moderate'
      }
    } else if (aqi > 100 && aqi <= 150) {
      return {
        emoji: 'warning',
        level: 'Unhealthy for Sentitive Group'
      }
    } else if (aqi > 150 && aqi <= 200) {
      return {
        emoji: 'red_circle',
        level: 'Unhealthy!'
      }
    } else if (aqi > 200 && aqi <= 300) {
      return {
        emoji: 'imp',
        level: 'Very Unhealthy!'
      }
    } else {
      return {
        emoji: 'skull_and_crossbones',
        level: 'Hazardous'
      }
    }
  }

  displayError(data) {
    log(`
      ${chalk.bold.bgRed(data)}
    `)
  }

  displayData({ data }) {
    const results = {
      aqi: data.aqi,
      city: data.city.name,
      url: data.city.url,
      ...this._getDescription(data.aqi)
    }

    log(`
      Current forecast in ${chalk.green(results.city)}

      Air looks ${chalk.green(`${emoji.get(results.emoji)}  ${results.level}`)}
      Air Quality Index is ${chalk.bold.green(results.aqi)}
      for more information visit ${chalk.yellow(results.url)}
    `)
  }
}

module.exports = new Render()
