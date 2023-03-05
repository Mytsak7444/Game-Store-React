import React from "react";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import GameImg from "../GameImg/GameImg";
import s from "./gameItem.module.css";

function GameItem({ game }) {
  return (
    <div className={s.game__item}>
      <GameImg image={game.image} />
      <div className={s.game__item__details}>
        <span className={s.game__item__title}>{game.title}</span>
        <div className={s.game__item__genre}>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className={s.game__item__buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
}

export default GameItem;
