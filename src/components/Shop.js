/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import { toast } from "react-toastify";
import { ShopContext } from "../context";

export default function Shop() {
  const { goods, setGoods, loading, order, isBasketShow } =
    useContext(ShopContext);

  // API Fetching
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => setGoods(data.shop));
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList />}
      {isBasketShow && <BasketList />}
    </div>
  );
}
