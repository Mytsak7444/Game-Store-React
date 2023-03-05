import React from "react";
import s from "./gameImg.module.css";

function GameImg({ image = "" }) {
  return (
    <div className={s.game__img} style={{ backgroundImage: `url(${image})` }} />
  );
}

export default GameImg;
