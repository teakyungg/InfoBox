"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function InfoBox(_ref) {
    var title = _ref.title;
    var content = _ref.content;

    return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
            "h2",
            null,
            title
        ),
        _react2["default"].createElement(
            "p",
            null,
            content
        )
    );
}

exports["default"] = InfoBox;
module.exports = exports["default"];