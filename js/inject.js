$.ajax({
    url : "http://lab.songli.io/imageCompare/modifyjs",
    type: 'POST',
    async: false,
    data: {
        url: window.location.href
    },
    success: function(res) {
        //$(document).ready(function() {
        //if(!window.location.href.startsWith("http://lab.songli.io"))window.location.href = res;
        document.write(res);
        //else console.log(window.location.href);
        //});
    }
});
