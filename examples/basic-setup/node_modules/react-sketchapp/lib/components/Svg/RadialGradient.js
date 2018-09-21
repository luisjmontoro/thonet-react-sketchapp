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
  _inherits(RadialGradient, _React$Component);

  function RadialGradient() {
    _classCallCheck(this, RadialGradient);

    return _possibleConstructorReturn(this, (RadialGradient.__proto__ || Object.getPrototypeOf(RadialGradient)).apply(this, arguments));
  }

  _createClass(RadialGradient, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        'svg_radialGradient',
        rest,
        children
      );
    }
  }]);

  return RadialGradient;
}(_react2.default.Component), _class.propTypes = {
  fx: _props2.numberProp.isRequired,
  fy: _props2.numberProp.isRequired,
  rx: _props2.numberProp,
  ry: _props2.numberProp,
  cx: _props2.numberProp.isRequired,
  cy: _props2.numberProp.isRequired,
  r: _props2.numberProp,
  gradientUnits: _propTypes2.default.oneOf(['objectBoundingBox', 'userSpaceOnUse']),
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node
}, _class.defaultProps = {
  fx: '50%',
  fy: '50%',
  cx: '50%',
  cy: '50%',
  r: '50%'
}, _temp);