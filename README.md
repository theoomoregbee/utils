# utils
Just my js util functions

## Phantomjs Scrapper

see on https://phantomjs.org/download.html for installation

Opens URLs that redirects to another URL within an IFrame and get the final redirected URL

Open `phantomjs-scrape-redirect-urls/index.js` update the `urls` array with links to be loaded for scraping. Then update `onPageLoad` function with your js functions to scrape. Then run it like so:

```shell
phantomjs phantomjs-scrape-redirect-url/index.js
```

see: https://phantomjs.org/page-automation.html for more