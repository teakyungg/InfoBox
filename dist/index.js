import React from "react";
import "./style.css";
function InfoBox({
  title,
  contents
}) {
  title = ArraySet(title, "h2");
  contents = ArraySet(contents, "p");
  return /*#__PURE__*/React.createElement("article", {
    className: "InfoBox"
  }, title, contents);
}
function ArraySet(data, Tag) {
  if (Array.isArray(data)) return data.map((item, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, item));else return /*#__PURE__*/React.createElement(Tag, null, data);
}
export default InfoBox;
