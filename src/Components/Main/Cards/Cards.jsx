import React from "react";
import Card from "./Card/Card";
import cardsInfo from "../../Info";
const Cards = () => {
  return (
    <div className="py-4 lg:flex lg:flex-row lg:items-center ">
      {cardsInfo.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            header={item.header}
            url={item.url}
            caption={item.caption}
          />
        );
      })}
    </div>
  );
};

export default Cards;
