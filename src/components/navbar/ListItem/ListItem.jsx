import React from "react";
import { NavLink } from "react-router-dom";
import "./ListItem.scss";

const ListItem = (props) => {
  return (
    <li className="List_Item">
      <NavLink className="Link" to={props.link}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default ListItem;
