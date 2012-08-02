var asinPattern = /(\d{10})/;
var ukUrlPrefix = "http://www.amazon.co.uk/dp/";

if (match = asinPattern.exec(window.location.href)) {
  asin = match[0]; //Consider correct ASIN to be the first one found
  ukUrl = ukUrlPrefix + asin;
  chrome.extension.sendRequest({redirect: ukUrl});
}
