import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./ListItem.scss";

const ListItem = (props) => {
  const location = useLocation();

  return (
    <li className={location.pathname === "/" ? "List_Item" : "List_Item2"}>
      <NavLink
        className="Link"
        to={props.link}
        onClick={() => {
          props.onClick();
        }}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default ListItem;
