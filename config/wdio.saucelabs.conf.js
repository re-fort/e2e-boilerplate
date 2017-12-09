const _config = require('./wdio.common.conf.js').config

let config = {
  //
  // =====================
  // Server Configurations
  // =====================
  // Host address of the running Selenium server. This information is usually obsolete as
  // WebdriverIO automatically connects to localhost. Also, if you are using one of the
  // supported cloud services like Sauce Labs, Browserstack, or Testing Bot you don't
  // need to define host and port information because WebdriverIO can figure that out
  // according to your user and key information. However, if you are using a private Selenium
  // backend you should define the host address, port, and path here.
  //

  // SAUCE LABS
  services: ['sauce'],
  user: process.env.SAUCE_LABS_USER,
  key: process.env.SAUCE_LABS_ACCESS_KEY,

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.

      //PC
      maxInstances: 5,
      browserName: 'chrome',
      version: '60',
      platform: 'Windows 10',
      tags: ['chrome', 'pc'],
    },
    {
      //SP
      maxInstances: 5,
      browserName: 'chrome',
      version: '60',
      platform: 'Windows 10',
      tags: ['chrome', 'sp'],
      // if ChromeDriver < 2.3.2, use chromeOptions instead of goog:chromeOptions
      'goog:chromeOptions': {
        args: [
          'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1',
          'window-size=420,1000',
        ],
      },
    },
  ],
}

config = Object.assign({}, config, _config)

exports.config = config
