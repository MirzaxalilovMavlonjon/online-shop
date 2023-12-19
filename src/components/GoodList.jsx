import React from "react";
import {GoodItem} from "./GoodItem.jsx";
import Loader from "./Loader";

function GoodList(props) {
  const { goods = [], addToBasket } = props;
  if (!goods.length) {
    return <Loader />;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.mainId} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export default GoodList;
