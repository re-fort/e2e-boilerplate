class Page {
  constructor(basename) {
    this.basename = basename
  }

  open(query = null) {
    query ? browser.url(`${this.basename}?${query}`) : browser.url(`${this.basename}`)
  }

  dataAttr(val) {
    return `[data-e2e="${val}"]`
  }
}

module.exports = Page
