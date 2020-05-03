"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _SidebarSection = _interopRequireDefault(require("../atoms/SidebarSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  > a {\n    margin-bottom: 6px;\n  }\n\n  a {\n    color: #e7e7e7;\n    font-weight: 500;\n    display: block;\n    padding: 13px 0px;\n    font-size: 1.3rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SideMenuContainer = (0, _styledComponents["default"])(_SidebarSection["default"])(_templateObject());

var SidebarMenu = function SidebarMenu(_ref) {
  var title = _ref.title,
      items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement(SideMenuContainer, null, /*#__PURE__*/_react["default"].createElement("h3", null, title), items && /*#__PURE__*/_react["default"].createElement("ul", null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: item.to
    }, item.title));
  })));
};

var _default = SidebarMenu;
exports["default"] = _default;