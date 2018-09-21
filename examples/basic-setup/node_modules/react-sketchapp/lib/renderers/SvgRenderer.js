'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ViewRenderer2 = require('./ViewRenderer');

var _ViewRenderer3 = _interopRequireDefault(_ViewRenderer2);

var _hacksForJSONImpl = require('../jsonUtils/hacksForJSONImpl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var snakeExceptions = ['gradientUnits', 'gradientTransform', 'patternUnits', 'patternTransform', 'stdDeviation', 'numOctaves', 'specularExponent', 'specularConstant', 'surfaceScale'];
function toSnakeCase(string) {
  if (string === 'href') {
    return 'xlink:href';
  }
  if (snakeExceptions.indexOf(string) !== -1) {
    return string;
  }
  return string.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
}

function makeSvgString(el) {
  if (typeof el === 'string') {
    return el;
  }
  var type = el.type,
      props = el.props,
      children = el.children;


  if (props && props.textNodes) {
    return props.textNodes.reduce(function (prev, textNode) {
      return prev + textNode.content;
    }, '');
  }

  if (!type || type.indexOf('svg_') !== 0) {
    throw new Error('Could not render type \'' + type + '\'. Make sure to only have <Svg.*> components inside <Svg>.');
  }

  var cleanedType = type.slice(4);
  var attributes = Object.keys(props || {}).reduce(function (prev, k) {
    return props[k] ? prev + ' ' + toSnakeCase(k) + '="' + props[k] + '"' : prev;
  }, '');

  var string = '<' + cleanedType + attributes;

  if (!children || !children.length) {
    string += '/>\n';
  } else {
    string += '>\n';
    string += (children || []).reduce(function (prev, c) {
      return prev + '  ' + makeSvgString(c);
    }, '');
    string += '</' + cleanedType + '>\n';
  }

  return string;
}

var SvgRenderer = function (_ViewRenderer) {
  _inherits(SvgRenderer, _ViewRenderer);

  function SvgRenderer() {
    _classCallCheck(this, SvgRenderer);

    return _possibleConstructorReturn(this, (SvgRenderer.__proto__ || Object.getPrototypeOf(SvgRenderer)).apply(this, arguments));
  }

  _createClass(SvgRenderer, [{
    key: 'getDefaultGroupName',
    value: function getDefaultGroupName(props) {
      return props.name || 'Svg';
    }
  }, {
    key: 'renderBackingLayers',
    value: function renderBackingLayers(layout, style, textStyle, props, children) {
      var layers = _get(SvgRenderer.prototype.__proto__ || Object.getPrototypeOf(SvgRenderer.prototype), 'renderBackingLayers', this).call(this, layout, style, textStyle, props);

      // add the "xmlns:xlink" namespace to we can use `href`
      // eslint-disable-next-line
      props['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';

      var svgString = makeSvgString({
        type: 'svg_svg',
        props: props,
        children: children
      });

      var svgLayer = (0, _hacksForJSONImpl.makeSvgLayer)(layout, 'Shape', svgString);

      layers.push(svgLayer);

      return layers;
    }
  }]);

  return SvgRenderer;
}(_ViewRenderer3.default);

module.exports = SvgRenderer;