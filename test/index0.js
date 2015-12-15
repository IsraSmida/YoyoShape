import assert from 'assert';
import yoyoShape from '../lib';

var roadAttr;
var amenityAttr;
var buildingAttr;
var naturalAttr;

module('Unit Testing The "Shapes" Module', {
  beforeEach: function (){
    roadAttr = JSON.parse({building: false, highway: 'Residential', id: '-629863', nodes: [{y: 369.0, x: 708.0}, {y: 396.0, x: 743.0}], name: 'Rue de Colmar'});
    amenityAttr = JSON.parse({id: '-629724', nodes: [{y: 32.0, x: 629.0}, {y: 42.0, x: 597.0}, {y: 43.0, x: 595.0}, {y: 32.0, x: 629.0}], amenity: 'parking'});
    buildingAttr = JSON.parse({building: true, id: '-629719', nodes: [{y: 0.0, x: 0.0}, {y: 0.0, x: 100.0}, {y: 100.0, x: 100.0}, {y: 100.0, x: 0.0}, {y: 0.0, x: 0.0}]});
    naturalAttr = JSON.parse({building: false, id: '-630043', nodes: [{y: 309.0, x: 222.0}, {y: 324.0, x: 262.0}, {y: 335.0, x: 231.0}, {y: 309.0, x: 222.0}], name: 'Bassin Paul Vatine', natural: 'water'});
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

describe('yoyoShape', function () {
  it('should do proper hidding of properties', function () {
    var shape0 = yoyoShape.createShape(roadAttr);
    var prop;
    var props = [];
    for (prop in shape0){
      if (shape0.hasOwnProperty(prop)){
        props.push(prop);
      }
    }
    assert(props.length === 4, 'Only 4 properties SHOULD be  visible in objects created by "createShape"');
    props.forEach(function (attr){
      assert(attr === 'id' || attr === 'toString' || attr === 'toSvgPath' || 'getName', 'One of "id" "toString", "toSvgPath" or "getName"');
    });
  });
});

describe('yoyoShape', function () {
  it('should have a working toSVGPath method', function () {
    var shape0 = yoyoShape.createShape(roadAttr);
    assert(shape0.toSvgPath() === 'M 708 369 L 743 396', 'Should create a valid SVG PATH (google SVG PATH for details)');
  });
});

describe('yoyoShape', function () {
  it('should have access to the attribute name', function () {
    var shape0 = yoyoShape.createShape(roadAttr);
    assert(shape0.getName() === 'Rue de Colmar', 'Should return the value corresponding to the "name" property in the attributes.');
  });
});

describe('yoyoShape', function () {
  it('should have a working createRoad function', function () {
    assert(typeof yoyoShape.createRoad !== 'undefined', 'The Shapes module sould expose a "createRoad" function');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createRoad function', function () {
    var road = yoyoShape.createRoad(roadAttr);
    assert(typeof road.getCategory === 'function', 'Object Created with "createRoad" Should have a getCategory function');
    assert(road.getCategory() === 'Residential', 'Should return the value corresponding to the "highway" property in the attributes');
  });
});

describe('yoyoShape', function () {
  it('should have a working createAmenity function', function () {
    assert(typeof yoyoShape.createAmenity !== 'undefined', 'The Shapes module sould expose a "createAmenity" function');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createAmenity function', function () {
    var amenity = yoyoShape.createAmenity(amenityAttr);
    assert(typeof amenity.getType === 'function', 'Object Created with "createAmenity" Should have a getType function');
    assert(amenity.getType() === 'parking', 'Should return the value corresponding to the "amenity" property in the attributes');
  });
});

describe('yoyoShape', function () {
  it('should have a working createBuilding function', function () {
    assert(typeof yoyoShape.createBuilding !== 'undefined', 'The Shapes module sould expose a "createBuilding" function');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createBuilding function', function () {
    var building = yoyoShape.createBuilding(buildingAttr);
    assert(typeof building.getArea === 'function', 'Object Created with "createBuilding" Should have a getArea function');
    assert(building.getArea() === 10000, 'Should return the area of the building computed from the set of points in the nodes attributes');
  });
});

describe('yoyoShape', function () {
  it('should have a working createNatural function', function () {
    assert(typeof yoyoShape.createNatural !== 'undefined', 'The Shapes module sould expose a "createNatural" function');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createBuilding function', function () {
    var natural = yoyoShape.createNatural(naturalAttr);
    assert(typeof natural.getType === 'function', 'Object Created with "createNatural" Should have a getType function');
    assert(natural.getType() === 'water', 'Should return the value corresponding to the "natural" property in the attributes');
  });
});
