var ok = require('assert').ok
var hideProperty = require('..')

describe('hide-property', function() {

  it('should hide a property', function(done) {
    var obj = {
      a: 10,
      b: 20
    }
    hideProperty(obj, 'b')
    ok(Object.keys(obj).length === 1)
    ok(obj.b === 20)
    done()
  })

})