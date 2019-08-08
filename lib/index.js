"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var RouterHistory =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(RouterHistory, _Component);

  function RouterHistory(props) {
    (0, _classCallCheck2["default"])(this, RouterHistory);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RouterHistory).call(this, props));
  }

  (0, _createClass2["default"])(RouterHistory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.to = this.props.to;
      if (this.to && this.to[0] !== '/') this.to = "/".concat(this.to);
      this.onLocationChange({
        history: this.props.history,
        to: this.to
      });
    }
  }, {
    key: "onLocationChange",
    value: function onLocationChange(_ref) {
      var history = _ref.history,
          to = _ref.to;
      var location = history.location;

      if (location.pathname === to) {
        this.props.activateMe();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          classNameActive = _this$props.classNameActive,
          classNameHasActiveChild = _this$props.classNameHasActiveChild,
          active = _this$props.active,
          hasActiveChild = _this$props.hasActiveChild,
          to = _this$props.to,
          externalLink = _this$props.externalLink,
          hasSubMenu = _this$props.hasSubMenu,
          toggleSubMenu = _this$props.toggleSubMenu,
          children = _this$props.children;
      return hasSubMenu || externalLink ? _react["default"].createElement("a", {
        className: (0, _classnames["default"])(className, hasActiveChild && classNameHasActiveChild),
        target: externalLink ? '_blank' : undefined,
        href: to,
        onClick: toggleSubMenu
      }, children) : _react["default"].createElement(_reactRouterDom.HashRouter, null, _react["default"].createElement(_reactRouterDom.Link, {
        className: (0, _classnames["default"])(className, active && classNameActive),
        to: to
      }, children));
    }
  }]);
  return RouterHistory;
}(_react.Component);

RouterHistory.propTypes = {
  className: _propTypes["default"].string.isRequired,
  classNameActive: _propTypes["default"].string.isRequired,
  classNameHasActiveChild: _propTypes["default"].string.isRequired,
  active: _propTypes["default"].bool.isRequired,
  hasActiveChild: _propTypes["default"].bool.isRequired,
  to: _propTypes["default"].string.isRequired,
  externalLink: _propTypes["default"].bool,
  hasSubMenu: _propTypes["default"].bool.isRequired,
  toggleSubMenu: _propTypes["default"].func,
  activateMe: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].array]).isRequired
};
var _default = RouterHistory;
exports["default"] = _default;