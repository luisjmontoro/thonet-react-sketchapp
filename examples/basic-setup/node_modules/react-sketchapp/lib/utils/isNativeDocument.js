'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (container) {
  return container && typeof container.pages === 'function';
};