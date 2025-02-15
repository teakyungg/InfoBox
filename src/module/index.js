import React from "react";
import "./style.css";

function InfoBox({ title, contents }) {

  title = ArraySet(title , "h2");
  contents = ArraySet(contents, "p");

  return (
    <article className="InfoBox">
       {title}
       {contents} 
    </article>
  );
}

function ArraySet(data, Tag) {

  if(Array.isArray(data)) return data.map((item,i) => <Tag key={i}>{item}</Tag>);
  else return <Tag>{data}</Tag>

}

export default InfoBox;
