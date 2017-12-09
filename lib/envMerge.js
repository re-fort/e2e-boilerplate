const envVars = require('../config/.env.js')
const constants = { COMMON: 'common' }
const target = process.env.E2E_ENV
const env = getEnv(envVars, target, constants)

function getEnv(envVars, target, constants) {
  if (!envVars.hasOwnProperty(target)) throw new Error('Missing specified environment')
  return Object.assign({}, envVars[constants.COMMON], envVars[target])
}

module.exports = env
