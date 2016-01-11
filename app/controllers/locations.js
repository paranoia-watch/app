Ti.App.addEventListener('app:paranoia', function(data) {
    var locationsData = data.paranoiaChange[0].locations;
    updateParis(locationsData)
    updateAmsterdam(locationsData)
    updateBerlin(locationsData)
})

function getChangeByLocationName(locationName, locationsData) {
    var keys = Object.keys(locationsData)
    for(var i in locationsData) {
        if(locationsData[i].name == locationName) return locationsData[i].change
    }
}

function updateParis(locationsData) {
    var change = getChangeByLocationName('Paris', locationsData)
    parsePercentageLabel($.ParanoiaParis, change)
    changeBackground(change, $.Paris)
}

function updateAmsterdam(locationsData) {
    var change = getChangeByLocationName('Amsterdam', locationsData)
    parsePercentageLabel($.ParanoiaAmsterdam, change)
    changeBackground(change, $.Amsterdam)
}

function updateBerlin(locationsData) {
    var change = getChangeByLocationName('Berlin', locationsData)
    parsePercentageLabel($.ParanoiaBerlin, change)
    changeBackground(change, $.Berlin)
}

function changeBackground(changePercentage, view) {
    var color = getGradientRgbColorByPercentage(changePercentage)
    backgroundGradient = {
        type: 'linear',
        startPoint: { x: '0%', y: '0%' },
        endPoint: { x: '0%', y: '100%' },
        colors: [ { color: 'rgba('+color+',1)', offset: 0.0}, { color: 'rgba('+color+',0)', offset: 1.0 } ]
    }
    view.backgroundGradient = backgroundGradient
}

function getGradientRgbColorByPercentage(changePercentage) {
    console.log('changePercentage=' + changePercentage)
    if(changePercentage <= -50) return '254, 239, 252'
    if(changePercentage <= -25) return '255, 181, 243'
    if(changePercentage <= 0) return '150,170,255' 
    if(changePercentage <= 25) return '255, 216, 0'  
    if(changePercentage <= 50) return '255, 134, 0'
    return '255, 0, 0'
}

function parsePercentageLabel(label, newValue) {
    var currentValue = parseInt(parseFloat(label.getText().replace(/(\%|\+)/g, "")).toFixed(1))
    var newValue = parseFloat(newValue).toFixed(1)
    return label.text = ((newValue>0) ? "+" : "") + newValue + "%"
}

function parseChangePercentage(change) {
    var newChange = parseFloat(change).toFixed(1)
    return newChange;
}

$.locations.addEventListener('open', function() {
    $.WebView.html = "<!doctype html><html><head><title>charli</title><script src=\"http://charli.paranoia.watch/socket.io/socket.io.js\"></script><script>window.onload = function() {window.socket = io.connect('http://charli.paranoia.watch'); window.socket.on('paranoia-updated', function(data){console.log('paranoia-updated', data); Ti.App.fireEvent('app:paranoia', data);});}</script></head><body></body></html>";
})