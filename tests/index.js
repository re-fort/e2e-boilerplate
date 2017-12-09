const fs = require('fs')
const path = require('path')

// require all test cases and execute them at once for making test more stable
describe('E2E', function () {
  let files = fs.readdirSync(`${path.join(__dirname)}/specs`)
  for (let file of files) {
    describe(`Test: ${file}`, function () {
      require(`${path.join(__dirname)}/specs/${file}`)()
    })
  }
})
