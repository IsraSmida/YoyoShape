var yoyoShape = {
  VERSION: '0.0.1'
};
function createShape(attributes) {
  attributes = attributes;
  attributes.id = parseInt(attributes.id);
  attributes.name = attributes.name;
  attributes.nodes = attributes.nodes;

  if (typeof attributes.id !== 'number' || !Array.isArray(attributes.nodes)) {
    throw {
      name: 'TypeError',
      message: 'Erreur de types d\'attributs'
    };
  }

  var shape = {};
  shape.id = function () {
    return attributes.id;
  };
  shape.getName = function () {
    return attributes.name || '';
  };
  shape.toString = function () {
    return '( ID :' + attributes.id + ', Name : ' + attributes.name + ')';
  };
  shape.toSvgPath = function () {
    function toTableaux(obj){
      var tab = [];
      tab.push(obj.x);
      tab.push(obj.y);
      return tab;
    }
    var newTab = attributes.nodes.map(toTableaux);
    function chaine(obj) {
      var ch = ' ';
      return ch + obj.join(' ');
    }
    var path = newTab.map(chaine);
    var newPath = 'M';
    return newPath + path.join(' L');
  };
  return shape;
}

function createRoad(attributes) {
  attributes = attributes;
  attributes.category = attributes.highway;

  var road = createShape(attributes);

  road.getCategory = function () {
    return attributes.category;
  };

  return road;
}

function createBuilding(attributes) {
  attributes = attributes;

  var building = createShape(attributes);

  building.getArea = function () {
    var area = 0;
    for (var i = 0; i < attributes.nodes.length - 1; i++) {
      area += attributes.nodes[i].x * attributes.nodes[i + 1].y - attributes.nodes[i + 1].x * attributes.nodes[i].y;
    }
    return area / 2;
  };

  building.area = building.getArea();

  return building;
}

function createAmenity(attributes) {
  attributes = attributes;
  attributes.type = attributes.amenity;

  var amenity = createShape(attributes);

  amenity.getType = function () {
    return attributes.type;
  };

  return amenity;
}

function createNatural(attributes) {
  attributes = attributes;
  attributes.type = attributes.natural;

  var natural = createShape(attributes);

  natural.getType = function () {
    return attributes.type;
  };

  return natural;
}

yoyoShape.createShape = createShape;
yoyoShape.createNatural = createNatural;
yoyoShape.createAmenity = createAmenity;
yoyoShape.createBuilding = createBuilding;
yoyoShape.createRoad = createRoad;
export default yoyoShape;
