import React from "react";
import { Heading } from "../heading";
import { Para } from "../para";
import { processesData } from "./processesData";
import "./styles.css";

export const Processes = () => {
  return (
    <div className="processes">
      {processesData.map((item, key) => {
        return (
          <div
            className="process-steps"
            style={{ background: `${item.bgColor}` }}
          >
            <div className="border-wrapper">
              <div className="image-wrapper">
                <img src={item.img} alt="Ff" />
              </div>
            </div>
            <Heading key={key} className="process-heading" title={item.title} />
            <Para
              className="process-para"
              text="Let’s find a therapist! It will take lessthan a minutes."
            />
          </div>
        );
      })}
    </div>
  );
};
