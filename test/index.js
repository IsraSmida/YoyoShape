import assert from 'assert';
import yoyoShape from '../lib';

/*describe('yoyo-shape', function () {
  it('should have unit test!', function () {
    assert(false, 'we expected this package author to add actual unit tests.');
  });
});*/

var roadAttr;
module('Unit Testing The "Shapes" Module', {
  beforeEach: function (){
    roadAttr = JSON.parse({building: false, highway: 'Residential', id: '-629863', nodes: [{y: 369.0, x: 708.0}, {y: 396.0, x: 743.0}], name: 'Rue de Colmar'});
  }
});

describe('yoyoShape', function () {
  it('should have a version number!', function () {
    assert(typeof yoyoShape.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});

describe('yoyoShape', function () {
  it('should create default object', function () {
    assert(typeof yoyoShape.createShape !== 'undefined', 'The Shapes module sould expose a "createShape" function');
    var shape0 = yoyoShape.createShape(roadAttr);
    assert(typeof shape0 === 'object', 'The "createShape" function sould return objects.');

  });
});
