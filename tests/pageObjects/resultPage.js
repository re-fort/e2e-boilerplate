const Page = require('./base/page')

class ResultPage extends Page {
  constructor() {
    super('result.html')
  }

  get text() { return $(super.dataAttr('text')) }
  get textarea() { return $(super.dataAttr('textarea')) }
  get select() { return $(super.dataAttr('select')) }
  get radio() { return $(super.dataAttr('radio')) }
  get checkbox() { return $(super.dataAttr('checkbox')) }
  get finished() { return $(super.dataAttr('finished')) }

}

module.exports = new ResultPage()
