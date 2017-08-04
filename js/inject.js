var scripts = document.scripts;
console.log(scripts.length);
console.log(window.location.href);

/*$.ajax({
    url : "http://lab.songli.io/imageCompare/modifyjs",
    type: 'POST',
    async: false,
    data: {
        url: window.location.href
    },
    success: function(res) {
        console.log(res);
        $(document).ready(function() {
            console.log(res);
            if(!window.location.href.startsWith("http://lab.songli.io"))window.location.href = res;
        });
    }
});*/
