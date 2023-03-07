import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../Redux/games/reducer";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import GameImg from "../GameImg/GameImg";
import s from "./gameItem.module.css";

function GameItem({ game }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/Game-Store-React/app/${game.title}`);
  };

  return (
    <div className={s.game__item} onClick={handleClick}>
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
