import React from "react";
import { Chip } from "../chip";
import { Date } from "../date";
import { Heading } from "../heading";
import { popularBlogData } from "./popularData";
import "./styles.css";

export const Popular = () => {
  return (
    <div className="popular">
      {popularBlogData.map((item, key) => {
        console.log(item);
        return (
          <div key={key} className="popular-blog-cards">
            <div className="cover-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="popular-card-content">
              <Date date={item.date} />
              <Heading className="popular-card-heading" title={item.title} />
              <Heading className="popular-card-author" title={item.author} />
              <div className="chips">
                {item.chipsData.map((item, key) => {
                  console.log({ item });
                  return (
                    <Chip
                      key={key}
                      text={item.title}
                      color={item.textColor}
                      background={item.bgColor}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
