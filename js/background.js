/*chrome.webNavigation.onCommitted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        file: 'js/inject.js'
    });
});*/

chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            console.log(details.url);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    s = document.createElement("script");
                    s.src = this.responseText;
                    //s.innerHTML = this.responseText;
                    document.head.appendChild(s);
                    /*chrome.tabs.executeScript(details.tabId, {
                        code: this.responseText
                    });*/
                }
            };
            xhttp.open("GET", details.url, false);
            xhttp.send();
            return {cancel: true};
        },
        {urls: ["*://*/*.js","*://*/*.html"]},
        ["blocking"]
        );
