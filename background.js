chrome.extension.onRequest.addListener(function(request, sender) {
  chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.update(tab.id, {url: request.redirect});
  });
  chrome.pageAction.show(sender.tab.id);
});
