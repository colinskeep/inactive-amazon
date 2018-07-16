const request = require('request');
const rp = require('request-promise');
const fs = require('fs');

const arr = fs.readFileSync('array.txt', 'utf8').split('\n');

function ArrayPlusDelay(arr, delegate, delay) {
    var i = 0;
    var interval = setInterval(function () {
        delegate(arr[i]);
        if (i++ >= lines.length - 1)
            clearInterval(interval);
    }, delay)
    return interval
}

var inter = ArrayPlusDelay(arr, function query(obj) {
    rp({
        uri: 'https://www.amazon.com/dp/' + obj,
        method: 'GET',
        resolveWithFullResponse: true
    })
        .then(function (response) {
        })
        .catch(function (err) {
            console.log(err.options.uri)
        })
}, 3000)
