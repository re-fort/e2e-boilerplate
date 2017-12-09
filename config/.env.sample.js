const env = {
  common: {
    // Selenium
    SELENIUM_HOST: '0.0.0.0',
    SELENIUM_PORT: 4444,
    SELENIUM_PATH: '/wd/hub',
    // SauceLabs
    SAUCE_LABS_USER: 'XXXXXXXX',
    SAUCE_LABS_ACCESS_KEY: 'XXXXXXXX',
  },
  develop: {
    BASE_URL: 'https://re-fort.net/e2e-boilerplate-demo/',
  },
  staging: {
    BASE_URL: 'https://re-fort.net/e2e-boilerplate-demo/',
  }
}

module.exports = env
