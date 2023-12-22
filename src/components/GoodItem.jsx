import React, { useContext } from "react";
import { ShopContext } from "./../context";

function GoodItem(props) {
  const { mainId, displayName, description, price, displayAssets } = props;

  const { addToBasket } = useContext(ShopContext);
  return (
    <div className="card" key={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              price,
              img: displayAssets[0].full_background,
            })
          }
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.finalPrice}$
        </span>
      </div>
    </div>
  );
}

export { GoodItem };
