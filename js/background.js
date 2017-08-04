chrome.webNavigation.onCommitted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        file: 'js/inject.js'
    });
});
