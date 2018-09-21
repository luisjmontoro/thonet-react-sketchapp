'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _props2 = require('./props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint is broken doesn't like when we just check the props without "using" them
/* eslint-disable react/no-unused-prop-types */
module.exports = (_temp = _class = function (_React$Component) {
  _inherits(Pattern, _React$Component);

  function Pattern() {
    _classCallCheck(this, Pattern);

    return _possibleConstructorReturn(this, (Pattern.__proto__ || Object.getPrototypeOf(Pattern)).apply(this, arguments));
  }

  _createClass(Pattern, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        'svg_pattern',
        rest,
        children
      );
    }
  }]);

  return Pattern;
}(_react2.default.Component), _class.propTypes = {
  x1: _props2.numberProp,
  x2: _props2.numberProp,
  y1: _props2.numberProp,
  y2: _props2.numberProp,
  patternTransform: _propTypes2.default.string,
  patternUnits: _propTypes2.default.oneOf(['userSpaceOnUse', 'objectBoundingBox']),
  patternContentUnits: _propTypes2.default.oneOf(['userSpaceOnUse', 'objectBoundingBox']),
  children: _propTypes2.default.node
}, _temp);