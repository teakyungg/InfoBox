import React from "react";
import "./test.css";
function Print({
  title,
  contents
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, contents));
}
export default Print;
