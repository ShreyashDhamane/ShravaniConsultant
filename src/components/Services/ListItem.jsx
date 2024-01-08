import React from "react";
import "./ListItem.scss";

const ListItem = (props) => {
  return (
    <div className="ListItem2">
      <img src={props.src} alt={props.alt} />
      <h4>{props.heading}</h4>
    </div>
  );
};

export default ListItem;
