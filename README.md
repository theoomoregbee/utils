# utils
Just my js util functions

## Phantomjs Scrapper

Opens links within an IFrame for easy access to scrape iframe content

Open `phantomjs-scrapper/index.js` update the `links` array with links to be loaded for scraping. Then update `onPageLoaded` function with your js functions to scrape. Then run it like so:

```shell
node phantomjs-scrapper
```

see: https://phantomjs.org/page-automation.html for more