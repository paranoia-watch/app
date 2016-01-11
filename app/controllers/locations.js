Ti.App.addEventListener('app:paranoia', function(data) {
    var locationsData = data.paranoiaChange[0].locations;
    updateParis(locationsData[0].change)
    updateAmsterdam(locationsData[1].change)
    updateBerlin(locationsData[2].change)
})

function updateParis(change) {
    var change = parseChangePercentage(change)
    $.ParanoiaParis.text = change + "%"
    changeBackground(change, $.Paris)
}

function updateAmsterdam(change) {
    var change = parseChangePercentage(change)
    $.ParanoiaAmsterdam.text = change + "%"
    changeBackground(change, $.Amsterdam)
}

function updateBerlin(change) {
    var change = parseChangePercentage(change)
    $.ParanoiaBerlin.text = change + "%"
    changeBackground(change, $.Berlin)
}

function changeBackground(changePercentage, view) {
    var color = getGradientRgbColorByPercentage(changePercentage)
    console.log('color', color)
    backgroundGradient = {
        type: 'linear',
        startPoint: { x: '0%', y: '0%' },
        endPoint: { x: '0%', y: '100%' },
        colors: [ { color: 'rgba('+color+',1)', offset: 0.0}, { color: 'rgba('+color+',0)', offset: 1.0 } ]
    }
    view.backgroundGradient = backgroundGradient
}

function getGradientRgbColorByPercentage(changePercentage) {
    if(changePercentage <= -50) return '254, 239, 252'
    if(changePercentage <= -25) return '255, 181, 243'
    if(changePercentage <= 0) return '150,170,255' 
    if(changePercentage <= 25) return '255, 216, 0'  
    if(changePercentage <= 50) return '255, 134, 0'
    return '255, 0, 0'
}

function parseChangePercentage(change) {
    return parseInt(change).toFixed(0)
}

$.locations.addEventListener('open', function() {
    $.WebView.html = "<!doctype html><html><head><title>charli</title><script src=\"http://charli.paranoia.watch/socket.io/socket.io.js\"></script><script>window.onload = function() {window.socket = io.connect('http://charli.paranoia.watch'); window.socket.on('paranoia-updated', function(data){console.log('paranoia-updated', data); Ti.App.fireEvent('app:paranoia', data);});}</script></head><body></body></html>";
})