import {should} from 'chai';
import yoyoShape from '../lib';

should();

var roadAttr;
var amenityAttr;
var buildingAttr;
var naturalAttr;

beforeEach(function () {
  roadAttr = {building: false, highway: 'Residential', id: '-629863', nodes: [{y: 369.0, x: 708.0}, {y: 396.0, x: 743.0}], name: 'Rue de Colmar'};
  amenityAttr = {id: '-629724', nodes: [{y: 32.0, x: 629.0}, {y: 42.0, x: 597.0}, {y: 43.0, x: 595.0}, {y: 32.0, x: 629.0}], amenity: 'parking'};
  buildingAttr = {building: true, id: '-629719', nodes: [{y: 0.0, x: 0.0}, {y: 0.0, x: 100.0}, {y: 100.0, x: 100.0}, {y: 100.0, x: 0.0}, {y: 0.0, x: 0.0}]};
  naturalAttr = {building: false, id: '-630043', nodes: [{y: 309.0, x: 222.0}, {y: 324.0, x: 262.0}, {y: 335.0, x: 231.0}, {y: 309.0, x: 222.0}], name: 'Bassin Paul Vatine', natural: 'water'};
});

describe('yoyoShape', function () {
  it('should have a version number!', function () {
    yoyoShape.should.have.property('VERSION');
  });
});

describe('yoyoShape', function () {
  it('should create default object', function () {
    yoyoShape.createShape.should.not.be.an('undefined');
    var shape0 = yoyoShape.createShape(roadAttr);
    shape0.should.be.an('object');
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
    props.should.have.length(4);
  });
});

describe('yoyoShape', function () {
  it('should have a working toSVGPath method', function () {
    var shape0 = yoyoShape.createShape(roadAttr);
    shape0.toSvgPath().should.be.equal('M 708 369 L 743 396');
  });
});

describe('yoyoShape', function () {
  it('should have a working getName method', function () {
    var shape0 = yoyoShape.createShape(roadAttr);
    shape0.getName().should.be.equal('Rue de Colmar');
  });
});

describe('yoyoShape', function () {
  it('should have a working createRoad function', function () {
    yoyoShape.createRoad.should.not.be.an('undefined');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createRoad function', function () {
    var road = yoyoShape.createRoad(roadAttr);
    road.getCategory.should.be.a('function');
    road.getCategory().should.be.equal('Residential');
  });
});

describe('yoyoShape', function () {
  it('should have a working createAmenity function', function () {
    yoyoShape.createAmenity.should.not.be.an('undefined');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createAmenity function', function () {
    var amenity = yoyoShape.createAmenity(amenityAttr);
    amenity.getType.should.be.a('function');
    amenity.getType().should.be.equal('parking');
  });
});

describe('yoyoShape', function () {
  it('should have a working createBuilding function', function () {
    yoyoShape.createBuilding.should.not.be.an('undefined');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createBuilding function', function () {
    var building = yoyoShape.createBuilding(buildingAttr);
    building.getArea.should.be.a('function');
    building.getArea().should.be.equal(10000);
  });
});

describe('yoyoShape', function () {
  it('should have a working createNatural function', function () {
    yoyoShape.createNatural.should.not.be.an('undefined');
  });
});

describe('yoyoShape', function () {
  it('should create objects with createNatural function', function () {
    var natural = yoyoShape.createNatural(naturalAttr);
    natural.getType.should.be.a('function');
    natural.getType().should.be.equal('water');
  });
});
