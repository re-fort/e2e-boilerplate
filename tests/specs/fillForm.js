const assert = require('assert')
const indexPage = require('../pageObjects/indexPage')
const resultPage = require('../pageObjects/resultPage')

module.exports = function() {
  describe('submit', function () {
    let input = {
      text: 'text',
      textarea: 'textarea',
      select: '2',
      radio: { index: 1, value: '2' },
      checkbox: true,
    }

    it('confirms input value', function () {
      indexPage.open()
      assert(browser.getUrl().includes(indexPage.basename))
      indexPage.fillForm(input)
      indexPage.submit()
      assert(browser.getUrl().includes(resultPage.basename))
      browser.waitUntil(() => { return resultPage.finished.getValue() === 'true' }, 5000, 'timeout')
      assert(resultPage.text.getText() === input.text)
      assert(resultPage.textarea.getText() === input.textarea)
      assert(resultPage.select.getText() === input.select)
      assert(resultPage.radio.getText() === input.radio.value)
      assert(resultPage.checkbox.getText() === input.checkbox ? '1' : '0')
    })
  })
}
