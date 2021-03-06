const page = require('webpage').create();

const urlsWithRedirect = [];

const settledUrls = []

/**
 * run you js codes to be processed after the page is loaded 
 * @param {*} page 
 */
function onPageLoad(page) {
  const landedURL = page.evaluate(function () {
    // get the final settled url after redirecting
    return document.location.toString()
  });
  console.log(landedURL);
  settledUrls.push(landedURL)
}

function onCompleted() {
  console.log('\n\n\nHosts found \n', settledUrls.join('\n'))
}



function next() {
  const url = urlsWithRedirect.shift();
  if (!url) {
    onCompleted()
    phantom.exit()
  }

  console.log('The default user agent is ' + page.settings.userAgent);
  page.settings.userAgent = 'SpecialAgent';
  page.open(url, function (status) {
    console.log('page status', status)
    if (status !== 'success') {
      console.log('Unable to access network');
    } else {
      onPageLoad(page)
    }
    next()
  });
}

next()
