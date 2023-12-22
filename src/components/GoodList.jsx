import React, { useContext } from "react";
import { GoodItem } from "./GoodItem.jsx";
import Loader from "./Loader";
import { ShopContext } from "../context.js";

function GoodList(props) {
  const { goods = [] } = useContext(ShopContext);
  if (!goods.length) {
    return <Loader />;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export default GoodList;
