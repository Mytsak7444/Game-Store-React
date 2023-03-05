import React from "react";
import s from "./gameGenre.module.css";

function GameGenre({ genre }) {
  return <div className={s.game__genre}>{genre}</div>;
}

export default GameGenre;
