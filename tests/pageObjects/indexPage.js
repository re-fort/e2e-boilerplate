const Page = require('./base/page')

class IndexPage extends Page {
  constructor() {
    super('index.html')
  }

  get text() { return $(super.dataAttr('text')) }
  get textarea() { return $(super.dataAttr('textarea')) }
  get select() { return $(super.dataAttr('select')) }
  get radio() { return $$(super.dataAttr('radio')) }
  get checkbox() { return $(super.dataAttr('checkbox')) }

  get form() { return $(super.dataAttr('form')) }

  fillForm(input) {
    this.text.setValue(input.text)
    this.textarea.setValue(input.textarea)
    this.select.selectByValue(input.select)
    this.radio[input.radio.index].click()
    if (input.checkbox !== this.checkbox.isSelected()) this.checkbox.click()
  }

  submit() {
    this.form.click()
  }

}

module.exports = new IndexPage()
