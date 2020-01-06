'use strict';
var rank_asc = require('../../main/map/rank_asc.js');

describe('rank by asc', function() {
  var collection_a = [3, 2, 4, 5, 6];
  var collection_b = [2, 3, 4, 5, 6];

  it('从小到大排序', function() {
    var result = rank_asc(collection_a);
    expect(result).toEqual(collection_b);
  });
});
