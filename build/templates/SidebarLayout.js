"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Sidebar = _interopRequireDefault(require("../organisms/Sidebar"));

var _Page = _interopRequireDefault(require("../pages/Page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Home = function Home(_ref) {
  var sideBarConfig = _ref.sideBarConfig,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Page["default"], {
    aside: /*#__PURE__*/_react["default"].createElement(_Sidebar["default"], {
      sideBarConfig: sideBarConfig
    })
  }, children));
};

var _default = Home;
exports["default"] = _default;