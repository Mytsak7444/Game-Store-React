import React from "react";
import s from "./gameGenre.module.css";

function GameGenre({ genre }) {
  return <span className={s.game__genre}>{genre}</span>;
}

export default GameGenre;
