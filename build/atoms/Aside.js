"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ASIDE_ELEMENTS_HORIZONTAL_PADDING = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #2a3f54;\n  color: #e7e7e7;\n  min-height: 100vh;\n\n  a,\n  a:visited {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  h1 {\n    font-size: 2.2rem;\n\n    font-weight: 400;\n    width: 100%;\n    color: #ecf0f1;\n\n    margin: 0;\n    padding: 1.5rem ", ";\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  h3 {\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    font-weight: bold;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ASIDE_ELEMENTS_HORIZONTAL_PADDING = "10px";
exports.ASIDE_ELEMENTS_HORIZONTAL_PADDING = ASIDE_ELEMENTS_HORIZONTAL_PADDING;

var Aside = _styledComponents["default"].aside(_templateObject(), ASIDE_ELEMENTS_HORIZONTAL_PADDING);

var _default = Aside;
exports["default"] = _default;