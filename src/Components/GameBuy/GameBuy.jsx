import React from "react";
import Button from "../Button/Button";
import s from "./gameBuy.module.css";

function GameBuy({ game }) {
  return (
    <div className={s.game__buy}>
      <span className={s.game__buy__price}>{game.price} грн</span>
      <Button type="primary" onClick={() => null}>
        В кошик
      </Button>
    </div>
  );
}

export default GameBuy;
