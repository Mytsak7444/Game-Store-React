import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils";
import OneCartItems from "../OneCartItem/OneCartItem";
import OrderItem from "../OrderItem/OrderItem";
import TwoCartItems from "../TwoCartItems/TwoCartItems";
import s from "./orderPage.module.css";

function OrderPage() {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className={s.order__page}>
      <div className={s.order__page__left}>
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className={s.order__page__right}>
        <div className={s.order__page__totalPrice}>
          <span>
            {items.length > 1 ? (
              <TwoCartItems items={items} />
            ) : (
              <OneCartItems items={items} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
