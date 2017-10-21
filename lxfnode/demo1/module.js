'use strict'

var module = {
  id: 'hello',
  exports: {},
};

var load  = function () {
  function greet(name) {
    console.log('Hello ,' + name + '!');
  }

  module.exports = greet;

  return module.exports;
};

var exported = load(module);

save(module, exported);
