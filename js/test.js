s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('js/script.js');
s.onload = function() {
    this.remove();
};
//(document.head || document.body).appendChild(s);*/
document.appendChild(s);

//document.head.innerHTML += "<script>function printf(){console.log('my printf');}</script>";
/*document.printf = function(){
    console.log("my printf");
}
printf();*/
