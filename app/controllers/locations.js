Ti.App.addEventListener('app:paranoia', function(data) {
    var locationsData = data.paranoiaChange[0].locations;
    $.ParanoiaAmsterdam.text = locationsData[1].change
    $.ParanoiaParis.text = locationsData[0].change
    $.ParanoiaBerlin.text = locationsData[2].change
})

$.locations.addEventListener('open', function() {
    $.WebView.html = "<!doctype html><html><head><title>charli</title><script src=\"http://charli.paranoia.watch/socket.io/socket.io.js\"></script><script>window.onload = function() {window.socket = io.connect('http://charli.paranoia.watch'); window.socket.on('paranoia-updated', function(data){console.log('paranoia-updated', data); Ti.App.fireEvent('app:paranoia', data);});}</script></head><body></body></html>";
})