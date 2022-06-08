import React from "react";
import { CalenderIcon } from "../icons";
import "./styles.css";

export const Date = ({ date }) => {
  return (
    <div className="date-wrapper">
        <CalenderIcon className="calender-icon"/>
      <h3 className="date">{date}</h3>
    </div>
  );
};
