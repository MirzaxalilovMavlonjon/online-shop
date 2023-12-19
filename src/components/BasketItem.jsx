/* eslint-disable jsx-a11y/anchor-is-valid */
export default function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    incrementQuantity,
    decrementQuantity,
    removeFromBasket,
  } = props;
  return (
    <li className="collection-item" key={mainId}>
      {displayName} x{quantity}= {price.finalPrice * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(mainId)}
        >
          <i className="material-icons left">exposure_plus_1</i>
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(mainId)}
          style={{ margin: "0px 10px", marginRight: "10px" }}
        >
          <i className="material-icons left">exposure_minus_1</i>
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => removeFromBasket(mainId)}
        >
          <i className="material-icons basket-delete">delete_forever</i>
        </a>
      </span>
    </li>
  );
}
