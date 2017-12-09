var tape = require('tape')

var ago = require('./')

var ts = Date.now()
console.log(ago(ts, ts - 2500))
console.log(ago(ts, ts - 2500*60))
console.log(ago(ts, ts - 60e3*60*1.72))
console.log(ago(ts, ts - 2500*60*24*365))
console.log(ago(ts, ts - (1000*60*60*24*365)))

console.log(new Date(ts - (1000*60*60*24*365)))


var examples = [
  [1000, '1s'],
  [2000, '2s'],
  [10e3, '10s'],
  [60e3, '1m'],
  [60e3*30, '30m'],
  [60e3*60, '1h'],
  [60e3*90, '1h30m'],
  [60e3*60*36, '1d12h'],
  [60e3*60*37, '1d13h'],
  [60e3*60*24*120, '120d'],
  [60e3*60*24*1000, '2y269d']
]
var ts = Date.now()
examples.forEach(function (e) {
  tape(e[0] +' => '+e[1], function (t) {
    t.equal(ago(ts, ts-e[0]), e[1])
    t.end()
  })
})










