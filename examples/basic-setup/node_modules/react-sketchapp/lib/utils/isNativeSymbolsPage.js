'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


// NOTE: Must cast to string as page.name() returns a MSBoxedObject
var isNativeSymbolsPage = function isNativeSymbolsPage(layer) {
  return layer instanceof MSPage && String(layer.name()) === 'Symbols';
};
exports.default = isNativeSymbolsPage;