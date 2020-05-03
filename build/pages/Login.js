"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

var Login = function Login(_ref) {
  var aside = _ref.aside,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "animate form login_form"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "login_content"
  }, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Login Form"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Username",
    required: ""
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "password",
    className: "form-control",
    placeholder: "Password",
    required: ""
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
    className: "btn btn-default submit",
    href: "index.html"
  }, "Log in"), /*#__PURE__*/_react["default"].createElement("a", {
    className: "reset_pass",
    href: "#"
  }, "Lost your password?")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "change_link"
  }, "New to site?", /*#__PURE__*/_react["default"].createElement("a", {
    href: "#signup",
    className: "to_register"
  }, "Create Account")))));
};

var _default = Login;
exports["default"] = _default;