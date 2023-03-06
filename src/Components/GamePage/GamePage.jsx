import React from "react";
import { useSelector } from "react-redux";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import GameImg from "../GameImg/GameImg";
import s from "./gamePage.module.css";

function GamePage() {
  const game = useSelector((state) => state.games.currentGame);

  if (!game) return null;

  return (
    <div className={s.game__page}>
      <h1 className={s.game__page__title}>{game.title}</h1>
      <div className={s.game__page__content}>
        <div className={s.game__page__left}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="Youtube Video Player"
            frameBorder="0"
          ></iframe>
        </div>
        <div className={s.game__page__right}>
          <GameImg image={game.image} />
          <p>{game.description}</p>
          <p className={s.secondary__text}>Популярні мітки цього продукту:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={s.game__page__buy__game}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
