import React from "react";
import PropTypes from "prop-types";
import Card from "./card/card";

const Cards = ({ cardDetails }) => {
  const content =
    cardDetails &&
    Array.prototype.map.call(cardDetails, (item, index) => {
      return <Card cardDetail={item} key={index} />;
    });

  const records = cardDetails ? cardDetails.length > 0 : null;

  return (
    <div className="layout-columns layout-columns--2-medium layout-columns--4-large">
      {records ? content : <h2 className="no-records"> No records Found </h2>}
    </div>
  );
};

Cards.propTypes = {
  cardDetails: PropTypes.node,
};

export default Cards;
