'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.renderLayers = exports.renderToJSON = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sketchappJsonPlugin = require('sketchapp-json-plugin');

var _buildTree = require('./buildTree');

var _buildTree2 = _interopRequireDefault(_buildTree);

var _flexToSketchJSON = require('./flexToSketchJSON');

var _flexToSketchJSON2 = _interopRequireDefault(_flexToSketchJSON);

var _resets = require('./resets');

var _symbol = require('./symbol');

var _RedBox = require('./components/RedBox');

var _RedBox2 = _interopRequireDefault(_RedBox);

var _getDocument = require('./utils/getDocument');

var _isNativeDocument = require('./utils/isNativeDocument');

var _isNativeDocument2 = _interopRequireDefault(_isNativeDocument);

var _isNativeSymbolsPage = require('./utils/isNativeSymbolsPage');

var _isNativeSymbolsPage2 = _interopRequireDefault(_isNativeSymbolsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderToJSON = exports.renderToJSON = function renderToJSON(element) {
  var tree = (0, _buildTree2.default)(element);
  return (0, _flexToSketchJSON2.default)(tree);
};

var renderLayers = exports.renderLayers = function renderLayers(layers, container) {
  if (container.addLayers === undefined) {
    throw new Error('\n     React SketchApp cannot render into this layer. You may be trying to render into a layer\n     that does not take children. Try rendering into a LayerGroup, Artboard, or Page.\n    ');
  }

  container.addLayers(layers);
  return container;
};

var getDefaultPage = function getDefaultPage() {
  var doc = (0, _getDocument.getDocumentFromContext)(context);
  var currentPage = doc.currentPage();

  return (0, _isNativeSymbolsPage2.default)(currentPage) ? doc.addBlankPage() : currentPage;
};

var renderContents = function renderContents(tree, container) {
  var json = (0, _flexToSketchJSON2.default)(tree);
  var layer = (0, _sketchappJsonPlugin.fromSJSONDictionary)(json);

  return renderLayers([layer], container);
};

var renderPage = function renderPage(tree, page) {
  // assume if name is set on this nested page, the intent is to overwrite
  // the name of the page it is getting rendered into
  if (tree.props.name) {
    page.setName(tree.props.name);
  }

  return tree.children.map(function (child) {
    return renderContents(child, page);
  });
};

var renderDocument = function renderDocument(tree, doc) {
  if (!(0, _isNativeDocument2.default)(doc)) {
    throw new Error('Cannot render a Document into a child of Document');
  }

  var initialPage = doc.currentPage();
  var shouldRenderInitialPage = !(0, _isNativeSymbolsPage2.default)(initialPage);

  return tree.children.map(function (child, i) {
    if (child.type !== 'page') {
      throw new Error('Document children must be of type Page');
    }

    var page = i === 0 && shouldRenderInitialPage ? initialPage : doc.addBlankPage();
    return renderPage(child, page);
  });
};

var renderTree = function renderTree(tree, _container) {
  if (tree.type === 'document') {
    var doc = _container || (0, _getDocument.getDocumentFromContext)(context);

    (0, _resets.resetDocument)(doc);
    return renderDocument(tree, doc);
  }

  var container = _container || getDefaultPage();

  (0, _resets.resetLayer)(container);
  return tree.type === 'page' ? renderPage(tree, container) : renderContents(tree, container);
};

var render = exports.render = function render(element, container) {
  if (!(0, _sketchappJsonPlugin.appVersionSupported)()) {
    return null;

    // The Symbols page holds a special meaning within Sketch / react-sketchapp
    // and due to how `makeSymbol` works, we cannot render into it
  } else if ((0, _isNativeSymbolsPage2.default)(container)) {
    throw Error('Cannot render into Symbols page');
  }

  try {
    var tree = (0, _buildTree2.default)(element);

    (0, _symbol.injectSymbols)(container ? (0, _getDocument.getDocumentFromContainer)(container) : (0, _getDocument.getDocumentFromContext)(context));

    return renderTree(tree, container);
  } catch (err) {
    var _tree = (0, _buildTree2.default)(_react2.default.createElement(_RedBox2.default, { error: err }));
    return renderContents(_tree, container);
  }
};