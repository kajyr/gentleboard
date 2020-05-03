"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SidebarSection = _interopRequireDefault(require("../atoms/SidebarSection"));

var _Aside = _interopRequireDefault(require("../atoms/Aside"));

var _SidebarMenu = _interopRequireDefault(require("../molecules/SidebarMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 25%;\n    background: #fff;\n    border: 1px solid rgba(52, 73, 94, 0.44);\n    vertical-align: middle;\n    border-radius: 50%;\n    padding: 2px;\n  }\n\n  .info {\n    margin-left: 10px;\n    color: #bab8b8;\n    font-weight: 300;\n  }\n\n  h2 {\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Profile = (0, _styledComponents["default"])(_SidebarSection["default"])(_templateObject());

var Sidebar = function Sidebar(_ref) {
  var _ref$sideBarConfig = _ref.sideBarConfig,
      sideBarConfig = _ref$sideBarConfig === void 0 ? {} : _ref$sideBarConfig;
  var title = sideBarConfig.title,
      profile = sideBarConfig.profile,
      items = sideBarConfig.items;
  return /*#__PURE__*/_react["default"].createElement(_Aside["default"], null, title && /*#__PURE__*/_react["default"].createElement("h1", null, title), profile && /*#__PURE__*/_react["default"].createElement(Profile, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: profile.image
  }), profile.name && /*#__PURE__*/_react["default"].createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Welcome,"), /*#__PURE__*/_react["default"].createElement("h2", null, profile.name))), /*#__PURE__*/_react["default"].createElement("nav", null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_SidebarMenu["default"], {
      key: item.id,
      title: item.title,
      items: item.items
    });
  })));
};

var _default = Sidebar;
exports["default"] = _default;