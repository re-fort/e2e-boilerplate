e2e-boilerplate
======================

A boilerplate for E2E(End-To-End) tests with Selenium docker containers.  
At the current, you can test using the official [Selenium](https://github.com/SeleniumHQ/docker-selenium) image or [Zalenium](https://github.com/zalando/zalenium) image.  

## What's included
- WebdriverIO
- mocha
- power-assert

## Benefits
- Less configuration to start E2E testing
- Handy NPM scripts

## Setup(Node)
```
git clone https://github.com/re-fort/e2e-boilerplate
cd e2e-boilerplate
npm i # or yarn install
cp config/.env.sample.js config/.env.js
```

### Setup(Docker)
#### Selenium
```
docker-compose up -d
```

#### Zalenium
```
# if using Zalenium, need to pull customized Selenium image
docker pull elgalu/selenium:3.8.1
docker-compose -f docker-compose.zalenium.yml up -d
```

## Usage
- `npm run e2e:local`
- `npm run e2e:local:staging`
- `npm run e2e:saucelabs`
- `npm run e2e:saucelabs:staging`
