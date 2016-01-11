$.locations.addEventListener('open', function() {
    $.WebView.html = "<!doctype html><html><head><title>charli</title><script src=\"http://charli.paranoia.watch/socket.io/socket.io.js\"></script><script>window.socket = io.connect('http://charli.paranoia.watch'); socket.on('paranoia-updated', function(data){console.log('paranoia-updated', data); Ti.App.fireEvent('socketConnected', data);});</script></head><body></body></html>";
    alert('open!')
})