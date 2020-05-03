"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromLaptop = exports.fromMobile = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @media ", " {\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media ", " {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var size = {
  mobileS: "320px",
  mobileM: "375px",
  tablet: "768px",
  laptopL: "1440px",
  desktop: "2560px"
};
var device = {
  mobile: "(min-width: 425px)",
  tablet: "(min-width: ".concat(size.tablet, ")"),
  laptop: "(min-width: 1024px)",
  desktop: "(min-width: ".concat(size.desktop, ")"),
  desktopL: "(min-width: ".concat(size.desktop, ")")
};

var fromMobile = function fromMobile(rules) {
  return (0, _styledComponents.css)(_templateObject(), device.mobileL, rules);
};

exports.fromMobile = fromMobile;

var fromLaptop = function fromLaptop(rules) {
  return (0, _styledComponents.css)(_templateObject2(), device.laptop, rules);
};

exports.fromLaptop = fromLaptop;