'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

var _props2 = require('./props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint is broken doesn't like when we just check the props without "using" them
/* eslint-disable react/no-unused-prop-types */
module.exports = (_temp = _class = function (_React$Component) {
  _inherits(SVGImage, _React$Component);

  function SVGImage() {
    _classCallCheck(this, SVGImage);

    return _possibleConstructorReturn(this, (SVGImage.__proto__ || Object.getPrototypeOf(SVGImage)).apply(this, arguments));
  }

  _createClass(SVGImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        'svg_image',
        rest,
        children
      );
    }
  }]);

  return SVGImage;
}(_react2.default.Component), _class.propTypes = {
  x: _props2.numberProp,
  y: _props2.numberProp,
  width: _props2.numberProp.isRequired,
  height: _props2.numberProp.isRequired,
  href: _Image2.default.propTypes.source,
  preserveAspectRatio: _propTypes2.default.string,
  children: _propTypes2.default.node
}, _class.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  preserveAspectRatio: 'xMidYMid meet'
}, _temp);