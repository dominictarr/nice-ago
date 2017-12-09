
var units = {
  s: 1000,
  m: 60e3,
  h: 60e3*60,
  d: 60e3*60*24,
  y: Math.floor(60e3*60*24*365.25)
}

function round (a, b) {
  return a - (a%b)
}

module.exports = function (ts, _ts) {
  var diff = ts - _ts
  var parts = 0
  var ago = ''

  function part(p, q) {
    var u = ~~((p ? diff%units[p] : diff)/units[q])
    if(u === 0 || ++parts > 2) return ''
    return u+q
  }
  return part(null, 'y') + part('y', 'd') + part('d', 'h') + part('h', 'm') + part('m', 's') || '0s'
}

