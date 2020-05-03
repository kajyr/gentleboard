"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Aside = _interopRequireDefault(require("../atoms/Aside"));

var _mediaqueries = require("../mediaqueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  ", " {\n    display: none;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _Aside["default"], (0, _mediaqueries.fromLaptop)("\n        ".concat(_Aside["default"], " {\n            display: block;\n            width: 230px;\n        }\n  ")));

var Page = function Page(_ref) {
  var aside = _ref.aside,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(Container, null, aside, children);
};

var _default = Page;
exports["default"] = _default;