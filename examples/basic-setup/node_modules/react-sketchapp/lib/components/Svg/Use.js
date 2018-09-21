'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var idExpReg = /^#(.+)$/;
module.exports = (_temp = _class = function (_React$Component) {
  _inherits(Use, _React$Component);

  function Use() {
    _classCallCheck(this, Use);

    return _possibleConstructorReturn(this, (Use.__proto__ || Object.getPrototypeOf(Use)).apply(this, arguments));
  }

  _createClass(Use, [{
    key: 'render',
    value: function render() {
      var href = this.props.href;
      // match "url(#pattern)"

      var matched = href.match(idExpReg);

      if (!href || !matched) {
        console.warn('Invalid `href` prop for `Use` element, expected a href like `"#id"`, but got: "' + href + '"');
      }

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        'svg_use',
        rest,
        children
      );
    }
  }]);

  return Use;
}(_react2.default.Component), _class.propTypes = _extends({
  href: _propTypes2.default.string.isRequired,
  width: _props2.numberProp, // Just for reusing `Symbol`
  height: _props2.numberProp }, _props2.pathProps), _temp);