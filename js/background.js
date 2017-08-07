/*chrome.webNavigation.onCommitted.addListener(function(details) {
  chrome.tabs.executeScript(details.tabId, {
  file: 'js/inject.js'
  });
  });*/

/*chrome.webRequest.onCompleted.addListener(
  function(details) {
  console.log(details.url);
  },
  {urls: ["<all_urls>"]}
  );*/

var count = 1;
var set = Object.create(null);

chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            if(!details.url.startsWith('http://127.0.0.1')){
                console.log("load: " + details.url);
                return {redirectUrl:
                    $.ajax({
                        url: "http://127.0.0.1:8081",
                        type: "POST",
                        data: details.url,
                        async: false,
                        success: function (result) {
                            console.log("redirect: " + result)
                                /*switch (result) {
                                  case true:
                                  processResponse(result);
                                  break;
                                  default:
                                  resultDiv.html(result);
                                  }*/
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            //alert(xhr.status);
                            //alert(thrownError);
                        }
                    }).responseText};
        }
        /*if(details.url in set){
          console.log("download: "+details.url);
          }
          else{
          set[details.url] = count;
          console.log(details.url);

          if(!details.url.startsWith('http://lab.songli.io')){
          $.ajax({
          url : "http://lab.songli.io/imageCompare/modifyjs",
          type: 'POST',
          async: false,
          data: {
          url: details.url
          },
          success: function(res) {
          console.log(res);
          }
          });
          }
          var inject = "s = document.createElement('script');"+
          "s.src = '" +  details.url + "';" +
          "document.head.appendChild(s);";

          chrome.tabs.executeScript(details.tabId, {
          code: inject
          });
          path = "/tem/" + count + ".js";
          count++;
          chrome.downloads.download({
          url: details.url,
          filename: path
          });
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          var inject = "s = document.createElement('script');"+
          "s.innerHTML = '" +  this.responseText + "';" +
          "document.head.appendChild(s);";
          console.log(inject);

          var inject = "s = document.createElement('script');"+
          "s.src = '" +  details.url + "';" +
          "document.head.appendChild(s);";

          chrome.tabs.executeScript(details.tabId, {
          code: inject
          });
          }
          };
          xhttp.open("GET", details.url, false);
          xhttp.send();*/
        //console.log(chrome.extension.getURL(path));
        /*return {
          redirectUrl: chrome.extension.getURL(path)
          };
          }*/
        },
{urls: ["*://*/*.js"]},
["blocking"]
);
