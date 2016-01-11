Ti.App.addEventListener('app:paranoia', function(data) {
    var locationsData = data.paranoiaChange[0].locations;
    $.ParanoiaAmsterdam.text = parseInt(locationsData[1].change).toFixed(0) + "%"
    $.ParanoiaParis.text = parseInt(locationsData[0].change).toFixed(0) + "%"
    $.ParanoiaBerlin.text = parseInt(locationsData[2].change).toFixed(0) + "%"
})

$.locations.addEventListener('open', function() {
    $.WebView.html = "<!doctype html><html><head><title>charli</title><script src=\"http://charli.paranoia.watch/socket.io/socket.io.js\"></script><script>window.onload = function() {window.socket = io.connect('http://charli.paranoia.watch'); window.socket.on('paranoia-updated', function(data){console.log('paranoia-updated', data); Ti.App.fireEvent('app:paranoia', data);});}</script></head><body></body></html>";
})