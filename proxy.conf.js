const PROXY_CONFIG = {
  "/xml/**": {
    "target": "http://finance.daum.net",
    "secure": false,
    "changeOrigin": true
  },
  "/services/**": {
    "target": "https://hooks.slack.com",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}

module.exports = PROXY_CONFIG;
