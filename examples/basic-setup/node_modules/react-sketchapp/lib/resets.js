'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetDocument = exports.resetLayer = undefined;

var _isNativeDocument = require('./utils/isNativeDocument');

var _isNativeDocument2 = _interopRequireDefault(_isNativeDocument);

var _isNativeSymbolsPage = require('./utils/isNativeSymbolsPage');

var _isNativeSymbolsPage2 = _interopRequireDefault(_isNativeSymbolsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resetLayer = exports.resetLayer = function resetLayer(container) {
  if ((0, _isNativeDocument2.default)(container)) {
    resetDocument(container); // eslint-disable-line
    return;
  }
  var layers = container.children();
  // Skip last child since it is the container itself
  for (var l = 0; l < layers.count() - 1; l += 1) {
    var layer = layers.objectAtIndex(l);
    layer.removeFromParent();
  }
};

// Clear out all document pages and layers

var resetDocument = exports.resetDocument = function resetDocument(document) {
  // Get Pages and delete them all (Except Symbols Page)
  var pages = document.pages();
  for (var index = pages.length - 1; index >= 0; index -= 1) {
    var page = pages[index];
    // Don't delete symbols page
    if (!(0, _isNativeSymbolsPage2.default)(page)) {
      if (pages.length > 1) {
        document.documentData().removePageAtIndex(index);
      } else {
        resetLayer(page);
      }
    }
  }
};