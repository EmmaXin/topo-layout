(function () {
  var Role = (function () {
    function makeTor(id) {
      return {
        "id": id,
        "type":"switch",
        "class":"device",
        "role": "tor",
        "x":218.5,
        "y":48
      };
    }

    function makeSpine(id, attrs) {
      attrs = attrs || {};

      return Object.assign({
        "id": id,
        "type":"switch",
        "class":"device",
        "role": "spine",
        "x":218.5,
        "y":48
      }, attrs);
    }

    function makeHost(id, cpDevice) {
      return {
        "id": id, //"0E:2A:69:30:13:81/-1",
        "type": "endstation",
        "class": "host",
        "role": "host",
        "x":218.5,
        "y":48,
        "cp": {
          "device": cpDevice, //"rest:216.58.200.211:80",
          "port": 81
        }
      };
    }

    return {
      makeTor: makeTor,
      makeSpine: makeSpine,
      makeHost: makeHost
    };
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Role;
  } else {
    window.role = Role;
  }
})();